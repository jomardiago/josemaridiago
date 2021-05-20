import React from 'react';

function PersonalInfo() {
    return (
        <div>
            <p className="m-0">
                <span className="green-text">Name: </span> <span>Jose Mari A. Diago</span>
            </p>
            <p className="m-0">
                <span className="green-text">Date of Birth: </span> <span>September 16, 19** :)</span>
            </p>
            <p className="m-0">
                <span className="green-text">Bio: </span> 
                <span>
                    <span className="yellow-text">Full Stack Developer</span> since 2011. A <span className="yellow-text">husband</span>. A soon to be <span className="green-text">father.</span> Oh! I have a lazy <span className="pink-text">dog</span>.
                </span>
            </p>
            <p className="m-0">
                <span className="green-text">College: </span> 
                <span>
                    Polytechnic University of the Philippines
                </span>
            </p>
            <div className="m-0">
                <span className="green-text">Work Experience:</span>
                <ul>
                    <li>Computer Professionals Inc. [2011 - present]</li>
                </ul>
            </div>
        </div>
    );
}

export default PersonalInfo;