"use client"

import { useEffect, useMemo, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

type FlightItem = {
  flight?: { iata?: string; number?: string }
  airline?: { name?: string }
  departure?: { airport?: string; iata?: string; estimated?: string; scheduled?: string; actual?: string }
  arrival?: { airport?: string; iata?: string; estimated?: string; scheduled?: string; actual?: string }
  flight_status?: string
}

type TabType = "arrival" | "departure"
type ViewState = "loading" | "error" | "empty" | "table"

const API_KEY = "1644cc96f8c25d394c1679cfd013ad6d"
const AIRPORT_IATA = "YYZ"
const API_URL = "https://api.aviationstack.com/v1/flights"

function normalizeStatus(rawStatus = ""): "Landed" | "Delayed" | "On Time" {
  const s = String(rawStatus).toLowerCase()
  if (s.includes("landed") || s.includes("arrived")) return "Landed"
  if (s.includes("delay")) return "Delayed"
  if (s.includes("scheduled") || s.includes("active") || s.includes("on-time") || s.includes("on time")) {
    return "On Time"
  }
  return "On Time"
}

function formatTime(dateStr?: string) {
  if (!dateStr) return "-"
  const d = new Date(dateStr)
  if (Number.isNaN(d.getTime())) return "-"
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

function statusBadgeClass(status: "Landed" | "Delayed" | "On Time") {
  if (status === "Landed") return "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
  if (status === "Delayed") return "bg-amber-500/20 text-amber-300 border border-amber-500/40"
  return "bg-sky-500/20 text-sky-300 border border-sky-500/40"
}

export function LiveFlightsClient() {
  const [currentType, setCurrentType] = useState<TabType>("arrival")
  const [viewState, setViewState] = useState<ViewState>("loading")
  const [errorMessage, setErrorMessage] = useState("Please check API key and try again.")
  const [flights, setFlights] = useState<FlightItem[]>([])

  const pageTitle = useMemo(
    () => (currentType === "arrival" ? "YYZ Live Arrivals" : "YYZ Live Departures"),
    [currentType]
  )

  const fetchFlights = async (type: TabType) => {
    try {
      if (!API_KEY) throw new Error("API key is missing. Please set API_KEY in page.")

      setViewState("loading")

      const params = new URLSearchParams({
        access_key: API_KEY,
        limit: "50",
      })

      const key = type === "arrival" ? "arr_iata" : "dep_iata"
      params.append(key, AIRPORT_IATA)

      const response = await fetch(`${API_URL}?${params.toString()}`)
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`)

      const data = await response.json()
      if (data.error) throw new Error(data.error.message || "API error")

      const rawRows = Array.isArray(data.data) ? data.data : []
      const rows = rawRows.filter((flight: FlightItem) => {
        const arr = (flight?.arrival?.iata || "").toUpperCase()
        const dep = (flight?.departure?.iata || "").toUpperCase()
        return type === "arrival" ? arr === AIRPORT_IATA : dep === AIRPORT_IATA
      })

      setFlights(rows)

      if (!rows.length) {
        setViewState("empty")
        return
      }

      setViewState("table")
    } catch (err: any) {
      setErrorMessage(err?.message || "Unknown error")
      setViewState("error")
    }
  }

  useEffect(() => {
    fetchFlights(currentType)
  }, [currentType])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main" className="pt-32 md:pt-36">
        <section className="container mx-auto px-4 py-8 md:py-10">
          <header className="mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="w-full md:w-auto text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Live Flights Dashboard</h1>
                <p className="text-foreground/70 mt-1">{pageTitle} • Toronto Pearson (YYZ)</p>
              </div>
              <button
                onClick={() => fetchFlights(currentType)}
                className="px-4 py-2 rounded-lg bg-gold hover:bg-gold/90 transition font-semibold text-background"
              >
                Refresh
              </button>
            </div>
          </header>

          <section className="bg-card/80 border border-border rounded-2xl shadow-2xl overflow-hidden">
            <div className="border-b border-border p-2 md:p-3">
              <div className="inline-flex bg-background/60 rounded-xl p-1 w-full sm:w-auto">
                <button
                  onClick={() => setCurrentType("arrival")}
                  className={`px-4 md:px-6 py-2 rounded-lg text-sm md:text-base font-semibold transition ${
                    currentType === "arrival" ? "bg-gold text-background" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  Arrivals
                </button>
                <button
                  onClick={() => setCurrentType("departure")}
                  className={`px-4 md:px-6 py-2 rounded-lg text-sm md:text-base font-semibold transition ${
                    currentType === "departure" ? "bg-gold text-background" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  Departures
                </button>
              </div>
            </div>

            <div className="p-4 md:p-6">
              {viewState === "loading" && (
                <div className="flex flex-col items-center justify-center py-14 gap-4">
                  <div className="w-10 h-10 border-4 border-border border-t-gold rounded-full animate-spin" />
                  <p className="text-foreground/80 font-medium">Loading flights...</p>
                </div>
              )}

              {viewState === "error" && (
                <div className="text-center py-14">
                  <p className="text-red-400 font-semibold mb-2">Could not load flight data.</p>
                  <p className="text-foreground/70 text-sm">{errorMessage}</p>
                </div>
              )}

              {viewState === "empty" && (
                <div className="text-center py-14">
                  <p className="text-foreground font-semibold mb-2">No flights found.</p>
                  <p className="text-foreground/60 text-sm">Try refreshing in a few minutes.</p>
                </div>
              )}

              {viewState === "table" && (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm md:text-[15px]">
                    <thead>
                      <tr className="text-left text-foreground/80 border-b border-border">
                        <th className="py-3 pr-4 font-semibold">Flight No</th>
                        <th className="py-3 pr-4 font-semibold">Airline</th>
                        <th className="py-3 pr-4 font-semibold">City</th>
                        <th className="py-3 pr-4 font-semibold">Estimated Time</th>
                        <th className="py-3 pr-4 font-semibold">YYZ</th>
                        <th className="py-3 pr-4 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {flights.map((flight, idx) => {
                        const flightNo = flight?.flight?.iata || flight?.flight?.number || "-"
                        const airline = flight?.airline?.name || "-"
                        const city =
                          currentType === "arrival"
                            ? flight?.departure?.airport || flight?.departure?.iata || "-"
                            : flight?.arrival?.airport || flight?.arrival?.iata || "-"

                        const estTime =
                          currentType === "arrival"
                            ? formatTime(flight?.arrival?.estimated || flight?.arrival?.scheduled || flight?.arrival?.actual)
                            : formatTime(flight?.departure?.estimated || flight?.departure?.scheduled || flight?.departure?.actual)

                        const status = normalizeStatus(flight?.flight_status)
                        const yyzSide =
                          currentType === "arrival"
                            ? (flight?.arrival?.iata || "-").toUpperCase()
                            : (flight?.departure?.iata || "-").toUpperCase()

                        return (
                          <tr key={`${flightNo}-${idx}`} className="hover:bg-background/50 transition">
                            <td className="py-3 pr-4 font-mono text-foreground">{flightNo}</td>
                            <td className="py-3 pr-4 text-foreground">{airline}</td>
                            <td className="py-3 pr-4 text-foreground/80">{city}</td>
                            <td className="py-3 pr-4 text-foreground/80">{estTime}</td>
                            <td className="py-3 pr-4 text-foreground/80 font-semibold">{yyzSide}</td>
                            <td className="py-3 pr-4">
                              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${statusBadgeClass(status)}`}>
                                {status}
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>

          <p className="mt-6 text-xs text-foreground/50">Data source: Aviationstack API • Airport: YYZ</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
