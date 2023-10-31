import * as React from "react";
import { graphql, withPrefix } from "gatsby";
import { Layout } from "../components";

/**
 * Blog content (/blog/:slug)
 *
 */
const BlogPost = ({ data }) => {
    const blog = data.markdownRemark

    return (
        <>
            <Layout>
            <div className="container">
                    <article className="content">
                        <section className="post-full-content">
                            <h1 className="content-title">
                                <img src={`${withPrefix('/images/icons/blog.svg')}`}/>
                                {blog?.frontmatter.title}
                            </h1>

                            {/* The main post content */}
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: blog?.html }}
                            />
                        </section>
                    </article>
                </div>
            </Layout>
        </>
    );
};

export default BlogPost;


export const postQuery = graphql`
    query($slug: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
