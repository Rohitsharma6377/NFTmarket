import Link from "next/link"
import { Button } from "../components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Your Gateway to Web3 and Digital Assets
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Create, buy, sell, and trade NFTs and cryptocurrencies on our secure decentralized platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/marketplace">Explore Marketplace</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/create">Create NFT</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] rounded-lg bg-muted/60 border shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <path d="M11 5.05v9.25c0 .47.38.85.85.85h1.15V7.05c0-.47-.38-.85-.85-.85H11Z" />
                      <path d="M11 5.05c0-.47-.38-.85-.85-.85H9c-.47 0-.85.38-.85.85v9.25c0 .47.38.85.85.85h1.15" />
                      <path d="M21 8.84c0-.47-.38-.85-.85-.85h-1.15v9.26c0 .47.38.85.85.85H21V8.84Z" />
                      <path d="M21 8.84c0-.47.38-.85.85-.85H23c.47 0 .85.38.85.85v9.26c0 .47-.38.85-.85.85h-1.15" />
                      <path d="M16 12.05V3.15c0-.47-.38-.85-.85-.85h-1.15v9.75" />
                      <path d="M16 12.05c0-.47.38-.85.85-.85H18c.47 0 .85.38.85.85v4.25c0 .47-.38.85-.85.85h-1.15" />
                      <path d="M6 12.05V3.15c0-.47.38-.85.85-.85H8v9.75" />
                      <path d="M6 12.05c0-.47-.38-.85-.85-.85H4c-.47 0-.85.38-.85.85v4.25c0 .47.38.85.85.85h1.15" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">CryptoVerse Token</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Current Price</p>
                  <p className="text-3xl font-bold">$0.0325</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <div className="text-sm text-green-500">+5.2%</div>
                    <div className="text-sm text-muted-foreground">24h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

