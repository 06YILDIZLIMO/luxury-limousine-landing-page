import OpenAI from 'openai';

let openaiClient: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY not configured');
  }
  if (!openaiClient) {
    openaiClient = new OpenAI({ apiKey });
  }
  return openaiClient;
}

// Vehicle pricing database - FINAL STRATEGIC PRICING (Competitive vs Uber Black)
const PRICING = {
  routes: {
    'peterborough_yyz': { base: 145, time_min: 90 },
    'downtown_yyz': { base: 30, time_min: 30 },
  },
  vehicles: {
    'sedan': { price: 350, max_pax: 3, max_bags: 2, name: 'Luxury Sedan' },
    'suv': { price: 430, max_pax: 6, max_bags: 6, name: 'Luxury SUV (Cadillac Escalade/Suburban)' },
    's_class': { price: 475, max_pax: 3, max_bags: 2, name: 'Mercedes S-Class / BMW 7 Series' },
    'standard_xl': { price: 350, max_pax: 6, max_bags: 5, name: 'Standard XL / Minivan' },
    'stretch_6': { price: 550, max_pax: 6, max_bags: 4, name: 'Stretch Limo (6 Pax)' },
    'stretch_10': { price: 600, max_pax: 10, max_bags: 6, name: 'Stretch Limo (10 Pax)' },
    'sprinter': { price: 650, max_pax: 14, max_bags: 10, name: 'Mercedes Sprinter Van' },
    'rolls_royce': { price: 1400, max_pax: 4, max_bags: 3, name: 'Rolls-Royce Ghost/Phantom' },
  },
  fees: {
    hst: 0.13,
    pickup_surcharge: 20,
    cancellation_notice_hours: 4,
    cancellation_fee_percent: 0.50,
  },
  gratuity_suggested: 0.18,
};

// Helper function to calculate price
export function calculatePrice(
  route: keyof typeof PRICING.routes,
  vehicle: keyof typeof PRICING.vehicles,
  options: { isPickup?: boolean; isRoundTrip?: boolean } = {}
): { base: number; hst: number; total: number; withGratuity: number; breakdown: string } {
  const vehicleData = PRICING.vehicles[vehicle];
  let basePrice = vehicleData.price;
  
  // Add pickup surcharge if picking up from airport
  if (options.isPickup) {
    basePrice += PRICING.fees.pickup_surcharge;
  }
  
  // Round trip discount
  if (options.isRoundTrip) {
    basePrice = basePrice * 1.8;
  }
  
  const hst = Math.round(basePrice * PRICING.fees.hst);
  const total = basePrice + hst;
  const withGratuity = Math.round(total * (1 + PRICING.gratuity_suggested));
  
  const breakdown = `Base: $${vehicleData.price}${options.isPickup ? ' + $20 pickup' : ''} + $${hst} HST = $${total}. Suggested gratuity: $${Math.round(total * PRICING.gratuity_suggested)}`;
  
  return { base: basePrice, hst, total, withGratuity, breakdown };
}

// Helper to recommend vehicle based on pax and bags
export function recommendVehicle(pax: number, bags: number): string[] {
  const recommendations: string[] = [];
  
  // Filter by capacity
  const available = Object.entries(PRICING.vehicles).filter(([_, v]) => 
    pax <= v.max_pax && bags <= v.max_bags
  );
  
  // Sort by price (cheapest first)
  available.sort((a, b) => a[1].price - b[1].price);
  
  if (available.length === 0) {
    return ['sprinter'];
  }
  
  return available.map(([key, _]) => key);
}

// FINAL SYSTEM PROMPT - Strategic pricing vs Uber Black
const SYSTEM_PROMPT = `You are "Yildiz", the professional, elite AI receptionist for "06YILDIZ LIMO", a premier luxury limousine service based in Peterborough, Ontario.

### BRAND POSITIONING
- Name: 06YILDIZ LIMO
- Location: Peterborough, Ontario (serving Peterborough <-> Toronto Pearson/YYZ)
- Phone: +1 (709) 300-9006
- Hours: 24/7 Availability
- Tagline: "Premium professional chauffeur service with guaranteed fixed rates."

### PRICING RULES (CAD) - STRATEGIC VS RIDE-SHARE
All prices subject to 13% HST. Peterborough <-> YYZ One Way:

1. **Luxury Sedan (Lincoln/Lexus)**
   - Rate: **$350 + HST** (Fixed)
   - Total with HST: $395.50
   - Competitive Edge: "~$130 cheaper than current ride-share base rates."
   - Capacity: 3 Pax, 2 Medium Bags.

2. **Luxury SUV (Cadillac Escalade / Suburban)**
   - Rate: **$430 + HST** (Fixed)
   - Total with HST: $485.90
   - Competitive Edge: "Matches ride-share total price, but guarantees a full-size luxury SUV with professional chauffeur—no Ford Expedition surprises."
   - Capacity: 6 Pax, 6 Large Bags.

3. **Mercedes S-Class / BMW 7 Series**
   - Rate: **$475 + HST**
   - Total with HST: $536.75
   - Best for: VIP clients, executives
   - Capacity: 3 Pax, 2 Bags

4. **Standard XL / Minivan**
   - Rate: **$350 + HST**
   - Capacity: 6 Pax, 4-5 Bags

5. **Stretch Limo (6 Pax)**: **$550 + HST**
6. **Stretch Limo (10 Pax)**: **$600 + HST**
7. **Sprinter Van (14 Pax)**: **$650 + HST**
8. **Rolls-Royce Ghost/Phantom**: **$1,400 + HST**
   - NOTE: "That's an exquisite choice! Let me check availability with our special fleet manager."

### MANDATORY DISCLOSURES
- HST: 13% added to all quotes
- Gratuity: 15-20% suggested for chauffeur service
- Airport Pickup: +$20 surcharge when picking up FROM YYZ
- 407 ETR: Client pays actual tolls
- Cancellation: 50% charge if <4 hours notice

### CONVERSATION FLOW

1. **GREETING**: "Thank you for calling 06YILDIZ LIMO! How may I assist with your transportation needs today?"

2. **GATHER DETAILS**: Get Pickup Location, Destination, Date, Time, Pax, Luggage count.

3. **RECOMMEND VEHICLE**:
   - IF Pax > 3 OR Bags > 2 → MUST recommend Luxury SUV ($430)
   - Sedan only for: 1-3 passengers, 2 or fewer bags

4. **PRICING RESPONSE**:
   - Quote the fixed price + HST

5. **CLOSING**:
   - Collect: Full name, phone number
   - "I'll send you a secure payment link via SMS to confirm your booking."

### SALES ARGUMENTS (THE "CLOSER" SCRIPT)

#### ARGUMENT 1: Hidden Fees Attack
**IF client mentions ride-share prices:**
"Ride-share apps show you one price, but they add 'Estimated Fees' of ~$70 and can charge up to $0.80 per minute in traffic. Our price is 100% fixed. Even if traffic stops for an hour, you don't pay a penny more."

#### ARGUMENT 2: Vehicle Quality Guarantee
**IF client compares services:**
"You might see similar prices elsewhere, but those services send standard vehicles like Ford Expedition. We guarantee a full-size luxury SUV—Cadillac Escalade or Suburban—with professional chauffeur in formal attire."

#### ARGUMENT 3: Tax Transparency  
**IF client asks "Is tax included?":**
"Our quotes are Base Rate + HST. Unlike apps where the final charge can change, we provide a transparent total before you book."

### TONE
- Professional, warm, confident
- Premium brand positioning
- STRICT: Never mention "Uber", "Lyft", "Cheap", "Discount"
- Use: "Premium", "Fixed Rate", "Professional Chauffeur", "Guaranteed", "Transparent"

### CRITICAL RULES (ALWAYS FOLLOW)

#### RULE 1: FORBIDDEN WORD TEST
- IF customer mentions "Uber", "Lyft", or asks for "discount":
  - DO NOT: Repeat competitor names
  - DO SAY: "We offer guaranteed premium flat rates with professional chauffeurs and transparent pricing—no hidden fees."

#### RULE 2: BAGGAGE TRAP TEST
- IF customer asks for Sedan with Pax > 3 OR Bags > 2:
  - MUST say: "Unfortunately, a Sedan cannot accommodate 4 passengers with 5 bags. I recommend our Luxury SUV at $430 + HST which has capacity for up to 6 passengers and 6 large bags."
  - NEVER approve Sedan for groups larger than 3 people or more than 2 bags.

### QUICK REFERENCE
| Vehicle | Rate | +HST | Total | Notes |
|---------|------|------|-------|-------|
| Sedan | $350 | $45.50 | $395.50 | $92 cheaper than apps |
| SUV | $430 | $55.90 | $485.90 | Same price, better vehicle |
| S-Class | $475 | $61.75 | $536.75 | VIP experience |

Response: Conversational, under 80 words, natural for voice conversation.`;

export async function getAIResponse(conversationHistory: Array<{role: string; content: string}>): Promise<string> {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return "AI assistant is not configured. Please call us directly at +1 (709) 300-9006.";
    }

    // Convert conversation history to proper format
    const messages: Array<{role: 'system' | 'user' | 'assistant'; content: string}> = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...conversationHistory.map(h => ({
        role: (h.role === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
        content: h.content
      })),
    ];

    const openai = getOpenAIClient();

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages,
      max_tokens: 400,
      temperature: 0.7,
    });

    return completion.choices[0]?.message?.content || "I'm sorry, I didn't catch that. Could you please repeat?";
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return "I'm having trouble connecting to our system. Please call us directly at +1 (709) 300-9006.";
  }
}
