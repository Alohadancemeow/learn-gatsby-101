import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"
import Stats from "../components/Stats"
import Email from "../components/Email"
import Footer from "../components/Footer"

// markup
const IndexPage = () => {
  return (
    <>
      <Layout >
        <main>
          <title>Home Page</title>
        </main>

        <Hero />
        <Trips heading="Lorem ipsum dolor sit." />
        <Testimonials />
        <Stats />
        <Email />
        <Footer />

      </Layout>
    </>
  )
}

export default IndexPage
