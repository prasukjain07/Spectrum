import React from 'react';
import "../css/Card.css"; // Import CSS file for styles

const Card = ({ Photo, Name, Committee }) => {
    return (
        <div className="group profile-card">
            <div className="img">
                <img
                    src={Photo}
                    alt="photo"
                    className="group w-full h-full object-cover"
                />
            </div>
            <div className="caption">
                <h3 className="name">{Name}</h3>
                <p className="comittee">{Committee}</p>
            </div>
        </div>
    );
};

export default Card;
