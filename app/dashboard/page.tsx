import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Activity,
  DollarSign,
  Download,
  Wallet,
  ImageIcon,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

export default function DashboardPage() {
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
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Manage your digital assets and track your portfolio</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,231.89</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                    +20.1%
                  </span>
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">NFTs Owned</CardTitle>
                <ImageIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                    +3
                  </span>
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Token Balance</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">25,000 CVT</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-500 flex items-center">
                    <ArrowDownRight className="mr-1 h-4 w-4" />
                    -5.2%
                  </span>
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Sales</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                    +1
                  </span>
                  from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="assets">
              <TabsList>
                <TabsTrigger value="assets">Assets</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
                <TabsTrigger value="nfts">NFTs</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              <TabsContent value="assets" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Assets</CardTitle>
                    <CardDescription>View and manage your cryptocurrency holdings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 text-sm font-medium">
                        <div>Asset</div>
                        <div>Balance</div>
                        <div className="text-right">Value</div>
                      </div>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 items-center">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <DollarSign className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">Ethereum</div>
                              <div className="text-xs text-muted-foreground">ETH</div>
                            </div>
                          </div>
                          <div>1.25 ETH</div>
                          <div className="text-right">$2,187.50</div>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <DollarSign className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">CryptoVerse Token</div>
                              <div className="text-xs text-muted-foreground">CVT</div>
                            </div>
                          </div>
                          <div>25,000 CVT</div>
                          <div className="text-right">$812.50</div>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <DollarSign className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">Binance Coin</div>
                              <div className="text-xs text-muted-foreground">BNB</div>
                            </div>
                          </div>
                          <div>3.5 BNB</div>
                          <div className="text-right">$1,231.89</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="transactions" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Your transaction history for the past 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-4 text-sm font-medium">
                        <div>Type</div>
                        <div>Asset</div>
                        <div>Amount</div>
                        <div className="text-right">Date</div>
                      </div>
                      <div className="space-y-4">
                        <div className="grid grid-cols-4 items-center">
                          <div className="text-green-500">Buy</div>
                          <div>Ethereum (ETH)</div>
                          <div>0.5 ETH</div>
                          <div className="text-right">Mar 8, 2023</div>
                        </div>
                        <div className="grid grid-cols-4 items-center">
                          <div className="text-red-500">Sell</div>
                          <div>CryptoVerse Token (CVT)</div>
                          <div>5,000 CVT</div>
                          <div className="text-right">Mar 5, 2023</div>
                        </div>
                        <div className="grid grid-cols-4 items-center">
                          <div className="text-green-500">Buy</div>
                          <div>Binance Coin (BNB)</div>
                          <div>2.0 BNB</div>
                          <div className="text-right">Feb 28, 2023</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="nfts" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Your NFTs</CardTitle>
                    <CardDescription>View and manage your NFT collection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {[1, 2, 3, 4].map((id) => (
                        <div key={id} className="overflow-hidden rounded-lg border">
                          <div className="relative aspect-square bg-muted">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <ImageIcon className="h-8 w-8 text-muted-foreground" />
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold">NFT #{id}</h3>
                            <p className="text-sm text-muted-foreground">Collection Name</p>
                            <div className="mt-2 flex justify-between">
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                              <Button variant="outline" size="sm">
                                Transfer
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio Analytics</CardTitle>
                    <CardDescription>Track the performance of your portfolio over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full flex items-center justify-center border rounded-lg">
                      <div className="text-center">
                        <BarChart3 className="mx-auto h-12 w-12 text-muted-foreground" />
                        <h3 className="mt-2 font-medium">Portfolio Performance</h3>
                        <p className="text-sm text-muted-foreground">Chart visualization would appear here</p>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-lg border p-3">
                        <div className="text-sm font-medium text-muted-foreground">Total Profit/Loss</div>
                        <div className="text-2xl font-bold text-green-500">+$842.25</div>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="text-sm font-medium text-muted-foreground">Best Performing</div>
                        <div className="text-2xl font-bold">Ethereum</div>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="text-sm font-medium text-muted-foreground">Portfolio Diversity</div>
                        <div className="text-2xl font-bold">3 Assets</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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

