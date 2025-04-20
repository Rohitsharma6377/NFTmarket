"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

// Sample token price data
const data = [
  { name: "Jan", price: 0.012 },
  { name: "Feb", price: 0.015 },
  { name: "Mar", price: 0.018 },
  { name: "Apr", price: 0.016 },
  { name: "May", price: 0.022 },
  { name: "Jun", price: 0.025 },
  { name: "Jul", price: 0.032 },
]

export function TokenStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>CVT Token Price History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}`, "Price"]} labelFormatter={(label) => `Month: ${label}`} />
              <Line type="monotone" dataKey="price" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium text-muted-foreground">Market Cap</div>
            <div className="text-2xl font-bold">$3.25M</div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium text-muted-foreground">24h Volume</div>
            <div className="text-2xl font-bold">$142K</div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium text-muted-foreground">Circulating Supply</div>
            <div className="text-2xl font-bold">100M CVT</div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium text-muted-foreground">Total Supply</div>
            <div className="text-2xl font-bold">1B CVT</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

