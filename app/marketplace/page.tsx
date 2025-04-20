import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

// Sample NFT data
const nfts = [
  {
    id: 1,
    name: "Cosmic Voyager #42",
    creator: "0x1a2b3c4d5e6f7g8h9i0j",
    price: 0.25,
    currency: "ETH",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Digital Dreams #17",
    creator: "0x2b3c4d5e6f7g8h9i0j1a",
    price: 0.18,
    currency: "ETH",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Neon Genesis #03",
    creator: "0x3c4d5e6f7g8h9i0j1a2b",
    price: 0.32,
    currency: "ETH",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "Pixel Punk #128",
    creator: "0x4d5e6f7g8h9i0j1a2b3c",
    price: 0.15,
    currency: "ETH",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 5,
    name: "Abstract Realm #09",
    creator: "0x5e6f7g8h9i0j1a2b3c4d",
    price: 0.22,
    currency: "ETH",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 6,
    name: "Crypto Creature #76",
    creator: "0x6f7g8h9i0j1a2b3c4d5e",
    price: 0.28,
    currency: "ETH",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function MarketplacePage() {
  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
  }

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
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">NFT Marketplace</h1>
              <p className="text-muted-foreground">Discover, collect, and sell extraordinary NFTs</p>
            </div>
            <Button asChild>
              <Link href="/marketplace/create">Create NFT</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-col gap-4 md:flex-row">
            <div className="flex flex-1 items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search NFTs by name or creator" className="pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="art">Art</SelectItem>
                  <SelectItem value="collectibles">Collectibles</SelectItem>
                  <SelectItem value="music">Music</SelectItem>
                  <SelectItem value="photography">Photography</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="recent">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Recently Added</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {nfts.map((nft) => (
              <Card key={nft.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={nft.image || "/placeholder.svg"}
                      alt={nft.name}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-2 p-4">
                  <div className="flex w-full justify-between">
                    <div>
                      <h3 className="font-semibold">{nft.name}</h3>
                      <p className="text-sm text-muted-foreground">By {formatAddress(nft.creator)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="font-semibold">
                        {nft.price} {nft.currency}
                      </p>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-2">
                    <Link href={`/marketplace/${nft.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} CryptoVerse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

