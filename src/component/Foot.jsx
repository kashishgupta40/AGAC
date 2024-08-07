import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/footer.css';
import img1 from "./../../images/logo (2).png"

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section logo">
                    <img src={img1} alt="Logo" />
                    <p>AquaGenetics AI Labs offers comprehensive support for all platform users.</p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-section quick-links">
                    <h2>Explore</h2>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/news">Upcoming Events</Link></li>
                        <li><Link to="/research">Research Highlight</Link></li>
                        <li><Link to="/news">Latest News</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-section news">
                    <h2>News</h2>
                    <ul>
                        <li>
                            <a href="#"><b>Bringing Food Production Back To Cities</b></a>
                            <span>July 5, 2022</span>
                        </li>
                        <li>
                            <a href="#"><b>The Future of Farming, Smart Irrigation Solutions</b></a>
                            <span>July 5, 2022</span>
                        </li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contact</h2>
                    <p><i className="fas fa-phone"></i> +1-800-123-4567 {/* (Available 9AM - 5PM EST)*/}</p>
                    <p><i className="fas fa-envelope"></i> support@agac.com</p>
                    <p><i className="fas fa-map-marker-alt"></i> Dallas, United States</p>
                    <div className="newsletter">
                        <input type="email" placeholder="Your Email Address" />
                        <button type="submit"><i className="fas fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© All Copyright 2024 by AquaGenetics AI Labs</p>
                <div className="footer-links">
                    <Link to="/terms-of-use">Terms of Use</Link> | <Link to="/privacy-policy">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
