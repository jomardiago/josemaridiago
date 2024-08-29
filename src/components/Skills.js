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
                    <li><span className="yellow-text">JavaScript</span></li>
                    <li><span className="yellow-text">TypeScript</span></li>
                    <li>React<span className="red-text">JS</span></li>
                    <li><span className="red-text">TanStack</span> React Query</li>
                    <li><span className="yellow-text">Axios</span></li>
                    <li><span className="red-text">React</span> Router</li>
                    <li><span className="red-text">vite-plugin-pages</span> (File Based Routing)</li>
                    <li><span className="red-text">Carbon Components</span> React</li>
                    <li><span className="yellow-text">Carbon Icons</span> React</li>
                    <li><span className="red-text">Carbon Charts</span> React</li>
                    <li><span className="yellow-text">Sass</span></li>
                    <li><span className="yellow-text">Vitest</span></li>
                    <li><span className="red-text">Testing Library</span> React</li>
                    <li><span className="red-text">Hook Form</span> React</li>
                    <li><span className="yellow-text">Zod</span></li>
                    <li><span className="yellow-text">Zustand</span></li>
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
