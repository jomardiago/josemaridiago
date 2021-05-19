import React from 'react';

function InvalidCommand() {
    return (
        <div>
            <p className="red-text">You may have accidentally entered an invalid command. No worries, please see commands below.</p>
            <p><span className="yellow-text">jad --info</span> : Shows my personal information I guess?</p>
            <p><span className="yellow-text">jad --skills</span> : Shows my skills, how about that! Hopefully impostor syndrome won't kick in!</p>
            <p><span className="yellow-text">jad --connect</span> : I don't know, maybe connect with me?</p>
            <p><span className="yellow-text">jad --clear</span> : Clear all the commands you have type.</p>
        </div>
    );
};

export default InvalidCommand;