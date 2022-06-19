/*
* Code written by: Jason You 
*/
import React from 'react';
import ReactRoundedImage from 'react-rounded-image';
export default function Image() {

    return (
        <div>
            <ReactRoundedImage
                            style={{ marginLeft: 10, marginRight: 10 }}
                            image={`${process.env.PUBLIC_URL}/source/jasonyouprofile.jpg`}
                            alt="Jason You"
                            roundedColor="#000000"
                            imageWidth="278"
                            imageHeight="290"
                            roundedSize="5"
                            borderRadius="200"
                            title="New York Portrait"
                        />
        </div>
    );
}