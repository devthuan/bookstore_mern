import React from 'react';
import '../aboutUs/style.css';
import { Link } from 'react-router-dom';

const AboutMckBookstore = () => {
    return (
        <div style={{ background: '#141c22', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            
            {/* Container for cards */}
            <div className="card-container" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                
                <div className="card">
                    <div className="imgbx">
                        <img src="/MichaelBgwh.jpeg" alt="Profile Image" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h2>...<br />
                                <h3 style={{ color: 'rgb(111, 111, 239)' }}>- ... -</h3><br />
                                <span style={{ color: 'rgb(109, 210, 250)' }}>...</span>
                            </h2>
                            <ul className="sci">
                                <li>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-tiktok"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="imgbx">
                        <img src="2.jpg" alt="Profile Image" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h2>...<br />
                                <h3 style={{ color: 'rgb(111, 111, 239)' }}>- ... -</h3><br />
                                <span style={{ color: 'rgb(109, 210, 250)' }}>...</span>
                            </h2>
                            <ul className="sci">
                                <li>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-tiktok"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="imgbx">
                        <img src="/Kiet.jpg" alt="Profile Image" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h2>...<br />
                                <h3 style={{ color: 'rgb(111, 111, 239)' }}>-...-</h3><br />
                                <span style={{ color: 'rgb(109, 210, 250)' }}>...</span>
                            </h2>
                            <ul className="sci">
                                <li>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-tiktok"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Go back button */}
            <div className="go-back-container" style={{ textAlign: 'center', marginTop: '30px' }}>
                <Link to="/" className="go-back-button" style={{ padding: '10px 20px', backgroundColor: 'rgb(111, 111, 239)', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>Go back home</Link>
            </div>
        </div>
    );
};

export default AboutMckBookstore;
