import React from 'react';
export default function Image() {
return (
    <div>
                <img 
                    alt="newyorkportrait"
                    height="300"
                    width="cover"
                    src={`${process.env.PUBLIC_URL}/me.jpg`} 
                    title="New York Portrait" 
                />
    </div>
);
}