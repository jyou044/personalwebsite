/*
* Code written by: Jason You 
*/
import React from 'react';
import ReactRoundedImage from 'react-rounded-image';
export default function Image() {

    return (
        <div align="center">
            <ReactRoundedImage
                            style={{ marginLeft: 10, marginRight: 10 }}
                            image={`${process.env.PUBLIC_URL}/source/me.jpg`}
                            alt="Jason You"
                            roundedColor="#000000"
                            imageWidth="230"
                            imageHeight="300"
                            roundedSize="5"
                            borderRadius="200"
                            title="New York Portrait"
                        />
        </div>
    );
}