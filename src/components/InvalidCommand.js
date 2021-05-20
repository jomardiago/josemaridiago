import React from 'react';
import CommandsList from './CommandsList';

function InvalidCommand() {
    return (
        <div>
            <p className="red-text">You may have accidentally entered an invalid command. No worries, please see commands below.</p>
            <CommandsList />
        </div>
    );
};

export default InvalidCommand;