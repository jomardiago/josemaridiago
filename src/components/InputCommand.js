import React from 'react';

function InputCommand({ handleKeyCommand }) {
    return (
        <p>
            $ <input type="text" name="command" placeholder="hey, type here..." className="command-input" autoFocus onKeyDown={handleKeyCommand} />
        </p>
    );
}

export default InputCommand;