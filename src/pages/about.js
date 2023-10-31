import * as React from "react";

import { Layout } from "../components";
import { StaticImage } from "gatsby-plugin-image"

const gridStyle = {
    height: '100%',
    objectFit: 'contain',
    margin: 'auto',
}

/**
 * About me page (/about)
 *
 */
const About = () => {
    return (
        <>
            <Layout>
                <div className="container">
                    <header className="tag-header">
                        <h1>About Me</h1>
                    </header>
                    <section className="about-feed" >
                        <div>
                            <p>
                                I'm Xueyao Jia, AKA <b>Yaoyao</b>, a software developer based in Vancouver, BC.
                            </p>

                            <p>
                                I have <b>3+ years</b> of hands-on experience in agile web development as full-stack and front-end developer.
                            </p>

                            <p>
                                I learnt backend and majored in Software Engineering during my undergraduate study.
                                Then majored in Computer Science and got my Master Degree in University of Victoria.
                                btw my Master project is about <b>Deep learning</b>, and it's a very cool project!
                                Click <a href="https://www.youtube.com/watch?v=ukOqK3aJTjA">me</a> to watch the video!
                            </p>

                            <p>
                                Outside of work, I enjoy reading, anime, cosplay, singing, piano and Pilates.
                                Also I keep learning to become a creative developer :P
                            </p>
                        </div>
                        <div style={gridStyle}>
                            <StaticImage src="../images/abot.jpeg" objectFit="contain" height="300"/>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
};

export default About;
