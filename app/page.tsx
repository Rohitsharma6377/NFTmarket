import Link from "next/link"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { ConnectWallet } from "../components/connect-wallet"
import { FeaturedNFTs } from "../components/featured-nfts"
import { TokenStats } from "../components/token-stats"
import { HeroSection } from "../components/hero-section"


export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold inline-block">CryptoVerse</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="/marketplace" className="text-sm font-medium transition-colors hover:text-primary">
                NFT Marketplace
              </Link>
              <Link href="/token" className="text-sm font-medium transition-colors hover:text-primary">
                Token
              </Link>
              <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
                Dashboard
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <ConnectWallet />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Explore, Create, and Trade Digital Assets
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Join our decentralized platform to mint NFTs, create your own cryptocurrency, and trade digital assets
              securely.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>NFT Marketplace</CardTitle>
                <CardDescription>Discover, buy, and sell unique digital collectibles</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Browse through our curated collection of NFTs from artists and creators around the world.</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/marketplace">Explore NFTs</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Token</CardTitle>
                <CardDescription>Create and manage your own cryptocurrency</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Launch your own token on Ethereum or BNB Chain with customizable tokenomics and features.</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/token">Launch Token</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dashboard</CardTitle>
                <CardDescription>Manage your digital assets in one place</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Track your portfolio, view transaction history, and manage your NFTs and tokens.</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto grid gap-6 md:max-w-[64rem] md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-4xl">Featured NFTs</h2>
              <p className="text-muted-foreground sm:text-lg">
                Discover the most popular and trending NFTs on our marketplace.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-4 md:p-6">
              <FeaturedNFTs />
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto grid gap-6 md:max-w-[64rem] md:grid-cols-2">
            <div className="flex flex-col gap-2 rounded-xl p-4 md:p-6">
              <TokenStats />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-4xl">Token Statistics</h2>
              <p className="text-muted-foreground sm:text-lg">
                Track the performance of our platform token and stay updated with the latest market trends.
              </p>
              <Button asChild className="w-fit">
                <Link href="/token">View Token Details</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} CryptoVerse. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

