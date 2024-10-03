import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePhoto from "./assets/profile.jpg";

const CardComponent = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleMoreInfo = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="card">
            <img
                src={profilePhoto}
                className="card-image"
                alt="Developer Avatar"
            />
            <div className="card-body">
                <h5 className="card-title">Phuong TA</h5>
                <p className="card-text">Front-end Developer</p>

                <button onClick={toggleMoreInfo} className="btn btn-primary">
                    {showMore ? 'Show Less' : 'Show More'}
                </button>

                {showMore && (
                    <div className="mt-3">
                        <p><strong>Skills:</strong> React, JavaScript, CSS</p>
                        <p><strong>Bio:</strong> Enthusiastic front-end developer with a passion for building dynamic user interfaces.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardComponent;
