import React from 'react';

function Skills() {
    return (
        <div>
            <p className="m-0">
                <span className="green-text">
                    Frontend:
                </span>
                <ul>
                    <li>HTML <span className="red-text">&</span> CSS</li>
                    <li><span className="yellow-text">Javascript</span></li>
                    <li>React<span className="red-text">JS</span></li>
                    <li><span className="red-text">Apollo</span> Client</li>
                    <li><span className="red-text">Styled</span> Components</li>
                    <li><span className="red-text">Chakra</span> UI</li>
                    <li><span className="red-text">Carbon</span> Components</li>
                    <li>Micro Frontends</li>
                </ul>
            </p>
            <p className="m-0">
                <span className="green-text">
                    Backend:
                </span>
                <ul>
                    <li><span className="yellow-text">Javascript</span></li>
                    <li>Node<span className="red-text">JS</span></li>
                    <li>Express</li>
                    <li><span className="red-text">Graph</span>QL</li>
                    <li><span className="red-text">Couch</span>DB</li>
                    <li><span className="red-text">Mongo</span>DB</li>
                    <li><span className="red-text">Apollo</span> Server</li>
                </ul>
            </p>
        </div>
    );
}

export default Skills;