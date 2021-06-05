import React from 'react';
export default function Image() {
return (
    <div>
            <img 
                        alt="newyorkportrait"
                        height="300"
                        width="233"
                        src={`${process.env.PUBLIC_URL}/me.jpg`} 
                        title="New York Portrait" 
                    />
    </div>
);
}