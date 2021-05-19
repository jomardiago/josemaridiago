import React from 'react';

function Skills() {
    return (
        <div className="skills-main">
            <div className="skills-fe">
                <p className="green-text">Front End Skills</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>AngularJS</li>
                    <li>Svelte</li>
                    <li>Redux</li>
                    <li>Apollo Client</li>
                    <li>Design Components I.E. Bootstrap, Material UI</li>
                    <li>Single SPA for Micro Front-Ends</li>
                </ul>
            </div>
            <div className="skills-be">
                <p className="green-text">Back End Skills</p>
                <ul>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>CouchDB</li>
                    <li>GraphQL</li>
                    <li>Apollo GraphQL</li>
                    <li>Micro Services</li>
                    <li>Restful APIs</li>
                    <li>Authorization Middlewares I.E JWTs</li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;