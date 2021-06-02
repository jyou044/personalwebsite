import React from 'react';

export default function Image() {
return (
    <div>
        <img
            alt="Jason You"
            height="300"
            src={`${process.env.PUBLIC_URL}/source/jasonyouprofile.jpg.jpg`} 
            title="It's me!" 
        />
    </div>
);
}