// Zhaolong cao wilson id 301425252
// Contact.js


import React from 'react';

function Projects() {
    return (

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
            <div className="text-center">
                <h1 className="mb-4">
                    "It is my privilege and pleasure to introduce a software project I was involved in."
                </h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                        <tr>
                            <th>PROJECT NAME</th>
                            <th>STACK</th>
                            <th>MY DUTY</th>
                        </tr>
                        <tr>
                            <td>RIMI-MOIVE</td>
                            <td>Jquery + Django</td>
                            <td>Software engineer</td>
                        </tr>
                        <tr>
                            <td>OMNIBUS</td>
                            <td>A Finance system</td>
                            <td>Software testing engineer</td>
                        </tr>
                        <tr>
                            <td>Blackdawn</td>
                            <td>PHP+MYSQL</td>
                            <td>Software engineer</td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>

    );
}

export default Projects;
