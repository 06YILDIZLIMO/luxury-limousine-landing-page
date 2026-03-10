import type { Metadata } from "next"
import { LiveFlightsClient } from "./live-flights-client"

export const metadata: Metadata = {
  title: "Live Flights YYZ | Toronto Pearson Arrivals & Departures | 06YILDIZ LIMO",
  description:
    "Track Toronto Pearson (YYZ) live arrivals and departures. Real-time flight dashboard by 06YILDIZ LIMO for airport transfer planning in Peterborough and Ontario.",
  keywords:
    "YYZ live flights, Toronto Pearson arrivals, Toronto Pearson departures, live airport status, airport transfer Peterborough, 06YILDIZ LIMO",
  alternates: {
    canonical: "https://06yildizlimo.com/live-flights",
  },
  openGraph: {
    title: "Live Flights YYZ | Toronto Pearson Dashboard",
    description:
      "Real-time arrivals and departures for Toronto Pearson (YYZ). Plan your airport transfer with live flight updates.",
    url: "https://06yildizlimo.com/live-flights",
    type: "website",
  },
  robots: { index: true, follow: true },
}

export default function LiveFlightsPage() {
  return <LiveFlightsClient />
}
