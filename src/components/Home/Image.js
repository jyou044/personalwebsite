import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
export default function Image() {
return (
    <div>
        <CardMedia
                component="img"
                alt="lights"
                 height="cover"
                src={`${process.env.PUBLIC_URL}/simplicity.jpg`} 
                title="lights"
                                />
    </div>
);
}