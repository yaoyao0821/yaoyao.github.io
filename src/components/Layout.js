import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, useStaticQuery, graphql, withPrefix } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";

import { Navigation } from ".";

// Styles
import "../styles/app.css";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({data, children, bodyClass, isHome }) => {
    const site = data.site.siteMetadata;

    const linkedinUrl = site.linkedin || null;
    const emailUrl = site.email ? `mailto:${site.email}` : null;
    const githubUrl = site.github || null;
    return <>
        <Helmet>
            <html lang={site.lang} />
            <body className={bodyClass} />
        </Helmet>

        <div className="viewport">
            <div className="viewport-top">
                <header
                    className="site-head"
                    style={{
                        backgroundImage: `url(${withPrefix('/images/bg.jpg')}`,
                    }}
                >
                    <div className="container">
                        <div className="site-mast">
                            <div className="site-mast-left">
                                <Link to="/">
                                    <img
                                        className="site-nav-icon"
                                        src={`${withPrefix('/images/icons/home.svg')}`}
                                        alt="home icon"
                                    />
                                    <span> Home </span>
                                    {/* <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt={site.title} /> */}
                                </Link>
                            </div>
                            <div className="site-mast-right">
                                <a
                                    className="site-nav-item"
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="site-nav-icon"
                                        src={`${withPrefix('/images/icons/github.svg')}`}
                                        alt="github icon"
                                    />
                                    GitHub
                                </a>

                                <a
                                    href={linkedinUrl}
                                    className="site-nav-item"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="site-nav-icon"
                                        src= "/images/icons/linkedin.svg"
                                        alt="LinkedIn icon"
                                    />
                                    LinkedIn
                                </a>
                                
                               
                                <a
                                    href={emailUrl}
                                    className="site-nav-item"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="site-nav-icon"
                                        src={`${withPrefix('/images/icons/email.png')}`}
                                        alt="Email"
                                    /> 
                                    Email
                                </a>
                            </div>
                        </div>
                        { isHome ? (
                            <div className="site-banner">
                                <h1 className="site-banner-title" 
                                style={{fontFamily: "Snell Roundhand"}}
                                 >
                                    <img
                                        className="name-logo"
                                        src={`${withPrefix('/images/icons/logo_trans.png')}`}
                                        alt="logo icon"
                                    />
                                        {site.title}
                                </h1>
                                <p className="site-banner-desc"
                                style={{fontFamily: "Snell Roundhand"}}>
                                    {site.description}
                                </p>
                            </div>
                        ) : null }
                        <nav className="site-nav">
                            <div className="site-nav-left">
                                <Navigation
                                    data={site.navArray}
                                    navClass="site-nav-item"
                                />
                                {}
                            </div>
                            <div className="site-nav-right">
                                <Link
                                    className="site-nav-button"
                                    to="/about"
                                >
                                    About Me
                                </Link>
                            </div>
                        </nav>
                    </div>
                </header>

                <main className="site-main">
                    {/* All the main content gets inserted here, index.js, post.js */}
                    {children}
                </main>
            </div>

            <div className="viewport-bottom">
                {/* The footer at the very bottom of the screen */}
                <footer className="site-foot">
                    <div className="site-foot-nav container">
                        <div className="site-foot-nav-left">
                            <Link to="/">{site.title}</Link> © 2023 &mdash;
                            Published with Gatsby
                        </div>
                        <div className="site-foot-nav-right">
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </>;
};

const DefaultLayoutSettingsQuery = (props) => {
        const data = useStaticQuery(
            graphql`
                query siteSettings {
                    site {
                        siteMetadata {
                            ...SiteSiteMetadataFragment
                            navArray {
                                ...SiteSiteMetadataNavArrayFragment
                            }
                        }
                    }

                    file(relativePath: {eq: "logo.png"}) {
                        childImageSharp {
                           gatsbyImageData(width: 30, height: 30, layout: FIXED)
                         }
                    }
                   
                }

                fragment SiteSiteMetadataNavArrayFragment on SiteSiteMetadataNavArray {
                    label
                    url
                }

                fragment SiteSiteMetadataFragment on SiteSiteMetadata {
                    title
                    description
                    siteUrl
                    lang
                    shareImageHeight
                    shareImageWidth
                    siteDescriptionMeta
                    siteIcon
                    siteTitleMeta
                    themeColor
                    backgroundColor
                    email
                    linkedin
                    github
                }
            `
        ) 
    
        return (
            <>
                <DefaultLayout data={data} {...props} />
            </>
        );
};

export default DefaultLayoutSettingsQuery;