import React from "react"
import Header from "../shared/Header"
import Footer from "../shared/Footer"

interface PageLayoutProps {
  children: React.ReactNode
}

const PageLayout = (props: PageLayoutProps): React.ReactElement | null => {
  const { children } = props

  if (!children) {
    return null
  }

  return (
    <main className="flex flex-col items-center">
      <div className="max-w-screen-xl self-stretch m-auto w-full">
        <Header className="font-sans px-6 py-6" />
        <article className="px-10 py-6">{children}</article>
        <Footer />
      </div>
    </main>
  )
}

export default PageLayout
