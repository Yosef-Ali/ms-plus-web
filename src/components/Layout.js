import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Footer from "./Footer"
import MainNav from "./MainNav"
const Layout = ({ children }) => {
  const menuLinks = []
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
    <>
      <MainNav menuLinks={site.siteMetadata.menuLinks} />
      <main id="primary" className="container px-4 py-6 mx-auto md:px-24">
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
