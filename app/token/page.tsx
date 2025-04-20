import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, DollarSign, ExternalLink, Info, LineChart, PieChart, Share2 } from "lucide-react"

export default function TokenPage() {
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
              <h1 className="text-3xl font-bold">CryptoVerse Token (CVT)</h1>
              <p className="text-muted-foreground">The native utility token of the CryptoVerse platform</p>
            </div>
            <div className="flex items-center gap-2">
              <Button>Buy CVT</Button>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Price</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$0.0325</div>
                <p className="text-xs text-green-500">+5.2% (24h)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Market Cap</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$3.25M</div>
                <p className="text-xs text-green-500">+2.8% (24h)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">24h Volume</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$142K</div>
                <p className="text-xs text-red-500">-1.5% (24h)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Circulating Supply</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">100M CVT</div>
                <p className="text-xs text-muted-foreground">of 1B total supply</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
                <TabsTrigger value="utility">Utility</TabsTrigger>
                <TabsTrigger value="exchanges">Exchanges</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>About CryptoVerse Token</CardTitle>
                    <CardDescription>The native utility token powering the CryptoVerse ecosystem</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>
                        CryptoVerse Token (CVT) is the native utility token of the CryptoVerse platform. It serves as
                        the primary medium of exchange within our ecosystem, enabling users to participate in various
                        activities such as NFT trading, staking, governance, and accessing premium features.
                      </p>
                      <p>
                        Built on the Ethereum blockchain as an ERC-20 token, CVT is designed to provide utility,
                        security, and value to all participants in the CryptoVerse ecosystem. The token is also
                        available on BNB Chain as a BEP-20 token through our cross-chain bridge.
                      </p>
                      <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border p-4">
                          <h3 className="font-semibold">Contract Address (Ethereum)</h3>
                          <p className="mt-1 text-sm text-muted-foreground break-all">
                            0x1234567890abcdef1234567890abcdef12345678
                          </p>
                          <Button variant="outline" size="sm" className="mt-2">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View on Etherscan
                          </Button>
                        </div>
                        <div className="rounded-lg border p-4">
                          <h3 className="font-semibold">Contract Address (BNB Chain)</h3>
                          <p className="mt-1 text-sm text-muted-foreground break-all">
                            0xabcdef1234567890abcdef1234567890abcdef12
                          </p>
                          <Button variant="outline" size="sm" className="mt-2">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View on BscScan
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tokenomics" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Tokenomics</CardTitle>
                    <CardDescription>Token distribution and allocation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Token Distribution</h3>
                        <div className="mt-4 h-[300px] w-full flex items-center justify-center">
                          <div className="text-center">
                            <PieChart className="mx-auto h-12 w-12 text-muted-foreground" />
                            <p className="mt-2 text-sm text-muted-foreground">
                              Token distribution chart would appear here
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 grid gap-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-primary"></div>
                              <span>Public Sale</span>
                            </div>
                            <span>30%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                              <span>Team & Advisors</span>
                            </div>
                            <span>20%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-green-500"></div>
                              <span>Ecosystem & Development</span>
                            </div>
                            <span>25%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                              <span>Marketing & Partnerships</span>
                            </div>
                            <span>15%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                              <span>Reserve</span>
                            </div>
                            <span>10%</span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Vesting Schedule</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Token release schedule for different allocation categories
                        </p>
                        <div className="mt-4 space-y-4">
                          <div>
                            <h4 className="text-sm font-medium">Public Sale</h4>
                            <p className="text-sm text-muted-foreground">
                              25% at TGE, remaining 75% unlocked over 6 months
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Team & Advisors</h4>
                            <p className="text-sm text-muted-foreground">
                              12-month cliff, then linear vesting over 24 months
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Ecosystem & Development</h4>
                            <p className="text-sm text-muted-foreground">
                              10% at TGE, remaining 90% unlocked over 36 months
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="utility" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Token Utility</CardTitle>
                    <CardDescription>How CVT is used within the CryptoVerse ecosystem</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-primary/20 p-2">
                              <DollarSign className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="font-semibold">Platform Fees</h3>
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Users can pay platform fees with CVT at a discounted rate compared to other payment methods.
                          </p>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-primary/20 p-2">
                              <LineChart className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="font-semibold">Staking Rewards</h3>
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Stake CVT to earn passive income and unlock additional platform benefits.
                          </p>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-primary/20 p-2">
                              <Info className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="font-semibold">Governance</h3>
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">
                            CVT holders can vote on platform proposals and participate in governance decisions.
                          </p>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-primary/20 p-2">
                              <Share2 className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="font-semibold">NFT Marketplace</h3>
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Use CVT to buy, sell, and trade NFTs on the CryptoVerse marketplace.
                          </p>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Staking Tiers</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Stake CVT to unlock different tiers of benefits on the platform
                        </p>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">Bronze Tier</h4>
                              <p className="text-sm text-muted-foreground">1,000 CVT</p>
                            </div>
                            <div className="text-sm">
                              <p>5% fee discount</p>
                              <p>Basic features</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">Silver Tier</h4>
                              <p className="text-sm text-muted-foreground">5,000 CVT</p>
                            </div>
                            <div className="text-sm">
                              <p>10% fee discount</p>
                              <p>Advanced features</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">Gold Tier</h4>
                              <p className="text-sm text-muted-foreground">25,000 CVT</p>
                            </div>
                            <div className="text-sm">
                              <p>20% fee discount</p>
                              <p>Premium features</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="exchanges" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Exchanges & Liquidity</CardTitle>
                    <CardDescription>Where to buy and trade CVT</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Centralized Exchanges</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          CVT is available on the following centralized exchanges
                        </p>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-muted"></div>
                              <div>
                                <h4 className="font-medium">Binance</h4>
                                <p className="text-xs text-muted-foreground">CVT/USDT, CVT/BTC</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Trade
                            </Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-muted"></div>
                              <div>
                                <h4 className="font-medium">OKX</h4>
                                <p className="text-xs text-muted-foreground">CVT/USDT</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Trade
                            </Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-muted"></div>
                              <div>
                                <h4 className="font-medium">Bybit</h4>
                                <p className="text-xs text-muted-foreground">CVT/USDT</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Trade
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Decentralized Exchanges</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          CVT is available on the following decentralized exchanges
                        </p>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-muted"></div>
                              <div>
                                <h4 className="font-medium">Uniswap</h4>
                                <p className="text-xs text-muted-foreground">Ethereum Network</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Trade
                            </Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-muted"></div>
                              <div>
                                <h4 className="font-medium">PancakeSwap</h4>
                                <p className="text-xs text-muted-foreground">BNB Chain</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Trade
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Liquidity Pools</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Provide liquidity to earn trading fees and rewards
                        </p>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">CVT/ETH Pool</h4>
                              <p className="text-sm text-muted-foreground">Uniswap V3</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">$1.2M TVL</p>
                              <p className="text-xs text-green-500">APR: 24.5%</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">CVT/BNB Pool</h4>
                              <p className="text-sm text-muted-foreground">PancakeSwap</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">$850K TVL</p>
                              <p className="text-xs text-green-500">APR: 18.2%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Create Your Own Token</CardTitle>
                <CardDescription>Launch your own cryptocurrency on Ethereum or BNB Chain</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    With CryptoVerse, you can create and deploy your own ERC-20 or BEP-20 token in minutes. Our platform
                    provides an easy-to-use interface for configuring your token's parameters, including name, symbol,
                    total supply, and tokenomics.
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-semibold">Standard Token</h3>
                      <ul className="mt-2 space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>Basic ERC-20/BEP-20 functionality</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>Customizable name, symbol, and supply</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>Mintable and burnable options</span>
                        </li>
                      </ul>
                      <div className="mt-4">
                        <p className="font-medium">Price: 5,000 CVT</p>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h3 className="font-semibold">Advanced Token</h3>
                      <ul className="mt-2 space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>All Standard Token features</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>Transaction fee mechanism</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>Automatic liquidity generation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>Reflection rewards</span>
                        </li>
                      </ul>
                      <div className="mt-4">
                        <p className="font-medium">Price: 15,000 CVT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/token/create">Create Your Token</Link>
                </Button>
              </CardFooter>
            </Card>
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

