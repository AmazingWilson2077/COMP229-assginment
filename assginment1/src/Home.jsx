// Home.js
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
            <div className="text-center">
                <div>
                    <img src={"/src/assets/logo.png"} style={{ width: '50%', height: '50%' }} />
                </div>
                <h1 className="mb-4">
                    Welcome to Zhaolong's personal website.
                </h1>
                <h4>
                    I always believe that something wonderful is about to happen
                </h4>
            </div>

        </div>


    );
}

export default Home;
