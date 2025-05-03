import './globals.css';


export const metadata = {
  title: 'Your Web3 App',
  description: 'Web3 application with NFT and token functionality',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body>
         {/* <WagmiProvider client={wagmiClient}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider theme={darkTheme()}> */}
              {children}
            {/* </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider> */}
      </body>
    </html>
  );
}
