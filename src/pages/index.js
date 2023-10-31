import * as React from "react";
import { Layout} from "../components";
import * as welcomeStyles from "../styles/welcome.module.css";

/**
 * Main index page (home page)
 *
 */
const Index = () => {
    return (
        <>
            <Layout isHome={true}>
            {/* <div className={welcomeStyles.outbox}>
                            <div className={welcomeStyles.typing}>
                            Hey there, welcome! I'm yaoyao, a 3+yr exp developer and job seeker. You can reach me by email↑
                            </div>
                        </div> */}
                <div className="container">
                    <section className="post-feed">
                    <div className={welcomeStyles.outbox}>
                            <div className={welcomeStyles.typing}>
                            Hey there, welcome! I'm yaoyao, a 3+yr exp developer and job seeker. You can reach me by email↑
                            </div>
                            </div>
                    </section>
                </div>
            </Layout>
        </>
    );
};

export default Index;