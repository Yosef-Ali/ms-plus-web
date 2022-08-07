import React from "react"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Layout from "../components/Layout"

import Service from "../components/Service"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Service />
    </Layout>
  )
}

export default IndexPage
