import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Footer from "./Footer"
import MainNav from "./MainNav"
import CTA from "./CTA"
import Testimonials from "./Testimonials"
const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <div className="relative">
      <MainNav menuLinks={site.siteMetadata.menuLinks} />
      <main id="primary" className="container px-4 py-6 mx-auto md:px-24">
        {children}
      </main>
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
