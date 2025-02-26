import Meta from "@/components/meta"

import "@/styles/globals.css"
import { ChakraProvider } from "@chakra-ui/react"
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        <ChakraProvider>
          <Meta />
          <Component {...pageProps} />
        </ChakraProvider>
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
