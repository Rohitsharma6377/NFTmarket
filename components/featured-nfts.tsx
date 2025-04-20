"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "../components/ui/card"
import { Button } from "../components/ui/button"

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
]

export function FeaturedNFTs() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
  }

  const currentNft = nfts[currentIndex]

  return (
    <div className="space-y-4">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image src={currentNft.image || "/placeholder.svg"} alt={currentNft.name} fill className="object-cover" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2 p-4">
          <div className="flex w-full justify-between">
            <div>
              <h3 className="font-semibold">{currentNft.name}</h3>
              <p className="text-sm text-muted-foreground">By {formatAddress(currentNft.creator)}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Current Price</p>
              <p className="font-semibold">
                {currentNft.price} {currentNft.currency}
              </p>
            </div>
          </div>
          <Button asChild className="w-full mt-2">
            <Link href={`/marketplace/${currentNft.id}`}>View Details</Link>
          </Button>
        </CardFooter>
      </Card>

      <div className="flex justify-center gap-2">
        {nfts.map((_, index) => (
          <Button
            key={index}
            variant={index === currentIndex ? "default" : "outline"}
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to NFT {index + 1}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

