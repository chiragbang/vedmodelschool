// Importing React library
import React from 'react';
import "../styles/Card.css"
import Image from 'next/image';

const Card = ({ icon, title, desc }) => {
    return (
        <div className="card-container">
            <div className='icon '>
                <Image className='icon-img' width={50}
                    height={50} src={icon} alt={title} />
            </div>

            <div className="content-container">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <hr className="line " />

                <p className=' card-description '>{desc}</p>
            </div>
        </div>
    );
};

export default Card;




