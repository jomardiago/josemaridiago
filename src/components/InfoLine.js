import React from 'react';

function InfoLine({ basic }) {
    return (
        <>
            <p>
                <span className="green-text">JAD@FULLSTACK-DOB91690</span> 
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
                        <p className="m-0"><span className="yellow-text">jad --info</span> : Shows my personal information I guess?</p>
                        <p className="m-0"><span className="yellow-text">jad --skills</span> : Shows my skills, how about that! Hopefully impostor syndrome won't kick in!</p>
                        <p className="m-0"><span className="yellow-text">jad --connect</span> : I don't know, maybe connect with me?</p>
                        <p className="m-0"><span className="yellow-text">jad --clear</span> : Clear all the commands you have type.</p>
                    </>
                )
            }
        </>
    );
}

export default InfoLine;