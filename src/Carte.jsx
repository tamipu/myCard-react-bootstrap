import profilePhoto from "./assets/profile.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';

function Carte() {
    return (
        <div className="card">
            <img className="card-image" src={profilePhoto} alt="profile picture"></img>
            <div className="card-body">
            <h5 className="card-title">Phuong TA</h5>
                <p className="card-text">
                    Front-end Developer
                </p>
                <a href="https://www.linkedin.com/in/phuong-ta-6989b0190/" className="btn btn-primary">LinkedIn</a>
            </div>
        </div>
    );
}

export default Carte;