import * as React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import { Layout } from "../components";
import "../styles/blogs.css";

/**
 * Blog list page (/blog)
 *
 * Loads all blogs
 *
 */
const Blog = ({ data }) => {
    const blogs = data.allMarkdownRemark.edges
    return (
        <>
          <Layout>
              <div className="container">
                  <header className="tag-header">
                  <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                  </header>
                  <section className="post-feed">
                      {
                        blogs.map(({node}) =>(
                            <div key={node.id}>
                                <h3 className="blog-item">
                                  <Link
                                    to={node.fields.slug}
                                    className="blog-link"
                                    >
                                      {node.frontmatter.title}{" "}
                                  </Link>
                                <div className="blog-time">
                                  {node.frontmatter.date}
                                </div>
                                </h3>
                                <p>{node.excerpt}</p>
                            </div>
                        ))
                      }
                  </section>
              </div>
          </Layout>
        </>
    );
};


export default Blog;

export const query = graphql`
  query {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`