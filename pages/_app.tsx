// global styles shared across the entire site
import * as React from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-coy.css'
import 'react-notion-x/src/styles.css'
import 'styles/global.css'
import 'styles/notion.css'
import 'styles/prism-theme.css'
// import { bootstrap } from '@/lib/bootstrap-client'
// import {
//   isServer
// } from '@/lib/config'
import * as ga from "../lib/ga"

// if (!isServer) {
//   bootstrap()
// }

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
      window.localStorage.setItem("redirection", url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />
}
