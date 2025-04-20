import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, DollarSign, Download, ImageIcon, Users, Wallet } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold inline-block">CryptoVerse</span>
            </Link>
            <span className="text-sm font-medium text-muted-foreground">Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Platform overview and management</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,853</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+12%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total NFTs</CardTitle>
                <ImageIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4,271</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+8%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1.2M</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+15%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Platform Revenue</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$42,500</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+18%</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="users">
              <TabsList>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="nfts">NFTs</TabsTrigger>
                <TabsTrigger value="tokens">Tokens</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
              </TabsList>
              <TabsContent value="users" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>View and manage platform users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border">
                        <div className="grid grid-cols-5 border-b p-3 text-sm font-medium">
                          <div>User ID</div>
                          <div>Wallet Address</div>
                          <div>Join Date</div>
                          <div>Status</div>
                          <div className="text-right">Actions</div>
                        </div>
                        <div className="divide-y">
                          {[1, 2, 3, 4, 5].map((id) => (
                            <div key={id} className="grid grid-cols-5 p-3 text-sm">
                              <div>#{id.toString().padStart(4, "0")}</div>
                              <div>0x{Math.random().toString(16).substring(2, 10)}...</div>
                              <div>Mar {id + 10}, 2023</div>
                              <div>
                                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                  Active
                                </span>
                              </div>
                              <div className="flex justify-end gap-2">
                                <Button variant="outline" size="sm">
                                  View
                                </Button>
                                <Button variant="outline" size="sm">
                                  Edit
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">Showing 5 of 2,853 users</div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" disabled>
                            Previous
                          </Button>
                          <Button variant="outline" size="sm">
                            Next
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="nfts" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>NFT Management</CardTitle>
                    <CardDescription>View and manage NFTs on the platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border">
                        <div className="grid grid-cols-6 border-b p-3 text-sm font-medium">
                          <div>NFT ID</div>
                          <div>Name</div>
                          <div>Creator</div>
                          <div>Price</div>
                          <div>Status</div>
                          <div className="text-right">Actions</div>
                        </div>
                        <div className="divide-y">
                          {[1, 2, 3, 4, 5].map((id) => (
                            <div key={id} className="grid grid-cols-6 p-3 text-sm">
                              <div>#{id.toString().padStart(4, "0")}</div>
                              <div>NFT Name #{id}</div>
                              <div>0x{Math.random().toString(16).substring(2, 10)}...</div>
                              <div>{(Math.random() * 2).toFixed(3)} ETH</div>
                              <div>
                                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                  Listed
                                </span>
                              </div>
                              <div className="flex justify-end gap-2">
                                <Button variant="outline" size="sm">
                                  View
                                </Button>
                                <Button variant="outline" size="sm">
                                  Edit
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">Showing 5 of 4,271 NFTs</div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" disabled>
                            Previous
                          </Button>
                          <Button variant="outline" size="sm">
                            Next
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tokens" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Token Management</CardTitle>
                    <CardDescription>View and manage custom tokens created on the platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border">
                        <div className="grid grid-cols-6 border-b p-3 text-sm font-medium">
                          <div>Token ID</div>
                          <div>Name</div>
                          <div>Symbol</div>
                          <div>Creator</div>
                          <div>Network</div>
                          <div className="text-right">Actions</div>
                        </div>
                        <div className="divide-y">
                          {[1, 2, 3, 4, 5].map((id) => (
                            <div key={id} className="grid grid-cols-6 p-3 text-sm">
                              <div>#{id.toString().padStart(4, "0")}</div>
                              <div>Token Name {id}</div>
                              <div>TKN{id}</div>
                              <div>0x{Math.random().toString(16).substring(2, 10)}...</div>
                              <div>{id % 2 === 0 ? "Ethereum" : "BNB Chain"}</div>
                              <div className="flex justify-end gap-2">
                                <Button variant="outline" size="sm">
                                  View
                                </Button>
                                <Button variant="outline" size="sm">
                                  Edit
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">Showing 5 of 128 tokens</div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" disabled>
                            Previous
                          </Button>
                          <Button variant="outline" size="sm">
                            Next
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="transactions" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Transaction History</CardTitle>
                    <CardDescription>View all transactions on the platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border">
                        <div className="grid grid-cols-6 border-b p-3 text-sm font-medium">
                          <div>Tx Hash</div>
                          <div>Type</div>
                          <div>From</div>
                          <div>To</div>
                          <div>Amount</div>
                          <div>Date</div>
                        </div>
                        <div className="divide-y">
                          {[1, 2, 3, 4, 5].map((id) => (
                            <div key={id} className="grid grid-cols-6 p-3 text-sm">
                              <div>0x{Math.random().toString(16).substring(2, 14)}...</div>
                              <div>{id % 3 === 0 ? "NFT Sale" : id % 3 === 1 ? "Token Transfer" : "Token Swap"}</div>
                              <div>0x{Math.random().toString(16).substring(2, 10)}...</div>
                              <div>0x{Math.random().toString(16).substring(2, 10)}...</div>
                              <div>
                                {id % 3 === 0
                                  ? `${(Math.random() * 2).toFixed(3)} ETH`
                                  : id % 3 === 1
                                    ? `${Math.floor(Math.random() * 10000)} CVT`
                                    : `${Math.floor(Math.random() * 1000)} USDT`}
                              </div>
                              <div>Mar {id + 15}, 2023</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">Showing 5 of 12,453 transactions</div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" disabled>
                            Previous
                          </Button>
                          <Button variant="outline" size="sm">
                            Next
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
                <CardDescription>Key metrics and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full flex items-center justify-center border rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-2 font-medium">Platform Growth</h3>
                    <p className="text-sm text-muted-foreground">Chart visualization would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest platform events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((id) => (
                    <div key={id} className="flex items-start gap-4 rounded-lg border p-3">
                      <div className="rounded-full bg-primary/20 p-2">
                        {id % 3 === 0 ? (
                          <Users className="h-4 w-4 text-primary" />
                        ) : id % 3 === 1 ? (
                          <ImageIcon className="h-4 w-4 text-primary" />
                        ) : (
                          <Wallet className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">
                          {id % 3 === 0
                            ? "New user registered"
                            : id % 3 === 1
                              ? "New NFT created"
                              : "New token launched"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {id % 3 === 0
                            ? `User #${Math.floor(Math.random() * 1000)} joined the platform`
                            : id % 3 === 1
                              ? `NFT #${Math.floor(Math.random() * 1000)} was created by 0x${Math.random().toString(16).substring(2, 10)}...`
                              : `Token #${Math.floor(Math.random() * 100)} was launched on ${id % 2 === 0 ? "Ethereum" : "BNB Chain"}`}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">{id * 2} minutes ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} CryptoVerse Admin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

