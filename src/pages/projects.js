import React, { useEffect } from 'react';
import { Layout } from "../components";
import "../styles/projects.css"
// import * as projectStyles from "../styles/projects.module.css"
const Projects = () => {
    useEffect(() => {
        const origStyle = document.body.style.overflow;
        document.body.style.overflow = 'visible';
        return () => {
            document.body.style.overflow = origStyle
        };
    }, []);

    return (
        <>
            <Layout>
                <div className="container">
                    <header className="project-header"> ACADEMIC PROJECTS</header>

                    <h1 className="center">ACADEMIC PROJECTS</h1>
                    {/* 01 */}
                    <article className="episode">
                        <div className="episode__number">2019</div>
                        <div className="episode__content">
                            <div className="title">Music-Driven Choreography Using <b>Deep Learning</b></div>
                            <div className="story">
                                <ul>
                                    <li><p> Tools and technologies: Python, TensorFlow, Librosa, Blender, Long Short-Term Memory(LTSM) neural network, and BVHacker.</p></li>
                                    <li><p ><a href='https://www.youtube.com/watch?v=ukOqK3aJTjA'> Demo Video</a> </p></li>
                                    <li><p> <a href='http://hdl.handle.net/1828/10787'>Paper URI</a></p></li>
                                    <li><p> Generated dance movements automatically from analyzing music pieces using deep learning technology.</p></li>
                                    <li><p> Proposed a model consisting of a 3-layer Long-Short Term Memory (LTSM) 
                                        network to learn the relationship between the dance and the music. The
                                        trained model was used to generate new dance movements.</p></li>
                                    <li><p> The resulting generated motions were viewed as animations using Blender.</p></li>
                                    <li><p> Our model was able to generate dance motions successfully but exhibited
                                            overfitting due to the small size of the data set.</p></li>
                                </ul>
                            </div>
                        </div>
                    </article>
                    {/* 02 */}
                    <article className="episode">
                        <div className="episode__number">2018</div>
                        <div className="episode__content">
                            <div className="title">Fluids Simulation using Position-Based Fluids Method</div>
                            <div className="story">
                                <ul>
                                    <li><p> Tools/Technologies used: C++, OpenGL, TBB and PBD</p></li>
                                    <li><p> <a href='https://youtu.be/4e4WaaIbVxU'>Demo Video</a></p></li>
                                    <li><p> Simulated dam break fluids particles using Position-Based Fluids approach.</p></li>
                                    <li><p> Implemented enforcing incompressibility, tensile instability, viscosity,
collision detection and response, face culling, multi-threads using TBB, and
surface reconstruction using the Marching Cube algorithm.</p></li>
                                </ul>
                            </div>
                        </div>
                    </article>
                    {/* 03 */}
                    <article className="episode">
                        <div className="episode__number">2017</div>
                        <div className="episode__content">
                            <div className="title">Hybrid Movie Recommendation System (<b>Data Mining</b>)</div>
                            <div className="story">
                                <ul>
                                    <li><p> Tools/Technologies used: Python</p></li>
                                    <li><p> A movie recommendation system based on multiple improved algorithms,
which has higher accuracy than normal collaborative filtering algorithms.</p></li>
                                    <li><p> Pre-processed the big data captured from MovieLens.</p></li>
                                    <li><p> Trained and predicted data by using user-based collaborative filtering
algorithm with K-means clustering algorithm and content-based filtering
with Naïve Bayes text classification.</p></li>
                                </ul>
                            </div>
                        </div>
                    </article>

                    {/* 04 */}
                    <article className="episode">
                        <div className="episode__number">2017</div>
                        <div className="episode__content">
                            <div className="title">Simulation of Congestion Control using OMNeT+ IDE</div>
                            <div className="story">
                                <ul>
                                    <li><p> Tools/Technologies used: OMNeT+</p></li>
                                    <li><p> Used OMNeT+ IDE to simulate congestion window, drop tail algorithm, RED mechanism and WRED mechanism.</p></li>
                                    <li><p> It focused on implementations of RED and WRED using TCP and UDP applications.</p></li>
                                </ul>
                            </div>
                        </div>
                    </article>

                    <article className="episode">
                        <div className="episode__number">2016</div>
                        <div className="episode__content">
                            <div className="title">Verification of Software-Controlled Insulin Pump</div>
                            <div className="story">
                                <ul>
                                    <li><p> Tools/Technologies used: Formal Method, Promela</p></li>
                                    <li><p> Used model checkers (SPIN and UPPAAL) to build models of the insulin pump, and verified its safety properties in Promela language.</p></li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </Layout>
        </>
    );
};

export default Projects;