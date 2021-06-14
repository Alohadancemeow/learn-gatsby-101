import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Trips from "../components/Trips"

// markup
const IndexPage = () => {
  return (
    <>
      <Layout >
        <main>
          <title>Home Page</title>
        </main>

        <Hero />
        <Trips />

      </Layout>
    </>
  )
}

export default IndexPage
