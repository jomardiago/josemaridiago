import React from 'react';

function CommandsList() {
    return (
        <div>
            <p className="m-0"><span className="yellow-text">jad --info</span> : Shows my personal information I guess?</p>
            <p className="m-0"><span className="yellow-text">jad --stack</span> : A day in a life of my technolgy stack.</p>
            <p className="m-0"><span className="yellow-text">jad --connect</span> : I don't know, maybe connect with me?</p>
            <p className="m-0"><span className="yellow-text">jad --clear</span> : Clear all the commands you have type.</p>
        </div>
    );
}

export default CommandsList;