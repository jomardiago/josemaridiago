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
                    <li><span className="yellow-text">JavaScript</span></li>
                    <li><span className="yellow-text">TypeScript</span></li>
                    <li>Node<span className="red-text">JS</span></li>
                    <li>NestJS</li>
                    <li><span className="red-text">PostgreSQL</span></li>
                    <li><span className="red-text">Mongo</span>DB</li>
                    <li><span className="yellow-text">Prisma</span></li>
                </ul>
            </p>
            <p className="m-0">
                <span className="green-text">
                    Tools:
                </span>
                <ul>
                    <li><span className="yellow-text">VSCode</span></li>
                    <li><span className="yellow-text">Github</span></li>
                    <li><span className="red-text">Docker</span></li>
                    <li>Postman</li>
                    <li><span className="red-text">Vite</span></li>
                    <li><span className="red-text">Prettier</span>DB</li>
                    <li><span className="yellow-text">Husky</span></li>
                    <li><span className="yellow-text">Nginx</span></li>
                </ul>
            </p>
        </div>
    );
}

export default Skills;
