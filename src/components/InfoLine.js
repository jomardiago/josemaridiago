import React from 'react';
import CommandsList from './CommandsList';

function InfoLine({ basic }) {
    return (
        <>
            <p>
                <span className="green-text">JAD@FULLSTACK-DOB916</span> 
                <span className="pink-text"> MINGW64</span> 
                <span className="yellow-text"> /c/manila/sta-mesa/josemaridiago</span>
                <span className="blue-text"> (master)</span>
            </p>
            {
                !basic && (
                    <>
                        <p>
                            $ <span>jad --help</span>
                        </p>
                        <p>
                            <span>Showing available commands. Just type <span className="green-text">'jad --{'{command}'}'</span> to run the command. I.E. <span className="yellow-text">jad --info</span></span>
                        </p>
                        <CommandsList />
                    </>
                )
            }
        </>
    );
}

export default InfoLine;