// About.js
import React from 'react';

function About() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
            <div className="text-center">
                <div>
                    <img src={"/src/assets/logo.png"} style={{width: '35%', height: '35%'}}/>
                </div>
                <h1 className="mb-4">
                    About Zhaolong Cao
                </h1>
                <div>
                    <p>
                        - Full stack software engineer. <br/>
                        - Previously worked as a product manager.<br/>
                        - Proficient in both frontend and backend development, as well as testing.<br/>
                        - Experienced in working with Linux environments.<br/>
                        - Friendly and approachable, with a strong team spirit.<br/>
                    </p>
                </div>
            </div>

        </div>


    )
        ;
}

export default About;
