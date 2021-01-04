import React from 'react';

import appleStore from '../../assets/images/apple-store.png';
import logoWhite from '../../assets/images/logo-white.png';
import googleStore from '../../assets/images/google-store.png';
import { Link } from 'react-router-dom';

const Footer = () =>{
        return (
            <>
            
		<footer className="footer bg-blue">
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-lg-3 mb-sm-4 mb-3">
						<div className="footer-about">
							<div className="row align-items-center">
								<div className="col-md-12 col-4">
									<img src={logoWhite} className="footer-logo" alt="logo" />
								</div>
								<div className="col-md-12 text-md-left text-center col-8">
									<h5>Connecting Event Organisers With Event Professionals.</h5>
								</div>
							</div>
						</div>
						<h5 className="d-none d-md-block">© EventMploy, 2020</h5>
					</div>

					<div className="col-md-3 ml-lg-auto col-lg-2 mb-sm-4 mb-3">
						<h5>Quick Links</h5>
						<ul className="list-unstyled mb-0">
							<li><Link to="#">About us</Link></li>
							<li><Link to="#">Contact us</Link></li>
							<li><Link to="#">FAQs</Link></li>
							<li><Link to="#">Privacy Policy</Link></li>
							<li><Link to="#">Terms & Conditions</Link></li>
						</ul>
					</div>
					<div className="col-md-3 col-lg-2 mb-sm-4 mb-3">
						<h5>Address</h5>
						<h5>EventMploy Victoria, Australia</h5>
					</div>
					<div className="col-md-3 d-flex flex-md-column flex-row align-items-center col-lg-2 mb-md-4 mb-3">
						<h5>Download Now</h5>

						<p className="ml-md-0 ml-3"><a href="/"><img src={appleStore} className="img-fluid" alt="icon" /></a></p>
						<p className="ml-md-0 ml-3"><a href="/"><img src={googleStore} className="img-fluid" alt="icon" /></a></p>
					</div>
					<div className="col-md-12 text-center">
						<div className="copyright">
							<h5>© EventMploy, 2020</h5>
						</div>
					</div>
				</div>
			</div>
		</footer>
            </>
        );
    }

export default Footer;