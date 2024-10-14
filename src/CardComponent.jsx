import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const developerFacts = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Fix the cause, not the symptom.",
    "Programming is the art of algorithm design and the craft of debugging.",
    "Deleted code is debugged code.",
    "There are only two kinds of programming languages: the ones people complain about and the ones nobody uses.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
];

const CardComponent = () => {
    const [showMore, setShowMore] = useState(false);
    const [name, setName] = useState('');
    const [bio, setBio] = useState('Front-end Developer');
    const [loading, setLoading] = useState(true);
    const [fact, setFact] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setName('TA Phuong');
            setBio('Enthusiastic developer passionate about creating web apps.');
            setLoading(false);
        }, 2000);

        setFact(getRandomFact());
    }, []);

    const getRandomFact = () => {
        const randomIndex = Math.floor(Math.random() * developerFacts.length);
        return developerFacts[randomIndex];
    };

    const toggleMoreInfo = () => {
        setShowMore(!showMore);
        if (!showMore) {
            setFact(getRandomFact());
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="card">
            <img
                src="src/assets/profile.jpg"
                className="card-image"
                alt="Avatar"
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{bio}</p>

                <button onClick={toggleMoreInfo} className="btn btn-primary">
                    {showMore ? 'Show Less' : 'Show More'}
                </button>

                {showMore && (
                    <div className="mt-3">
                        <p><strong>Skills:</strong> React, JavaScript, CSS</p>
                        <p><strong>Bio:</strong> {bio}</p>
                        <p><strong>Developer Fact:</strong> {fact}</p>
                    </div>
                )}

                {/* Links Section */}
                <div className="mt-3">
                    <h6>Connect with me:</h6>
                    <a href="https://www.linkedin.com/in/phuong-ta-6989b0190/" target="_blank" rel="noopener noreferrer" className="me-3">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/tamipu" target="_blank" rel="noopener noreferrer" className="me-3">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://miaphuong.vercel.app" target="_blank" rel="noopener noreferrer">
                        <FaGlobe size={24} />
                    </a>
                    <p className="mt-2">Email: <a href="mailto:ttmpwork@gmail.com">ttmpwork@gmail.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;