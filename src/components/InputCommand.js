import React from 'react';

function InputCommand({ handleKeyCommand }) {
    return (
        <p>
            $ <input type="text" name="command" className="command-input" autoFocus onKeyDown={handleKeyCommand} />
        </p>
    );
}

export default InputCommand;