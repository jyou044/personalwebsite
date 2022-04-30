/*
* Code written by: Jason You 
*/
import React from 'react';
export default function Image() {

    return (
        <div>
            <img
                alt="newyorkportrait"
                height="300"
                width="233"
                src={`${process.env.PUBLIC_URL}/source/me.jpg`}
                title="New York Portrait"
            />
        </div>
    );
}