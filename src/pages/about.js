import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About me</h1>
      <p> I am currently training to become a full stack web developer.</p>
      <p>
        Contact me here ..
        <button>
          <Link to="contact">Click me!</Link>
        </button>
      </p>
    </Layout>
  )
}

export default AboutPage
