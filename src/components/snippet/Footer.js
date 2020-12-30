import React, { Component } from 'react';

import appleStore from '../../assets/images/apple-store.png';
import logoWhite from '../../assets/images/logo-white.png';
import googleStore from '../../assets/images/google-store.png';

class Footer extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
            
		<footer class="footer bg-blue">
			<div class="container">
				<div class="row">
					<div class="col-md-3 col-lg-3 mb-sm-4 mb-3">
						<div class="footer-about">
							<div class="row align-items-center">
								<div class="col-md-12 col-4">
									<img src={logoWhite} class="footer-logo" alt="logo" />
								</div>
								<div class="col-md-12 text-md-left text-center col-8">
									<h5>Connecting Event Organisers With Event Professionals.</h5>
								</div>
							</div>
						</div>
						<h5 class="d-none d-md-block">© EventMploy, 2020</h5>
					</div>

					<div class="col-md-3 ml-lg-auto col-lg-2 mb-sm-4 mb-3">
						<h5>Quick Links</h5>
						<ul class="list-unstyled mb-0">
							<li><a href="#">About us</a></li>
							<li><a href="#">Contact us</a></li>
							<li><a href="#">FAQs</a></li>
							<li><a href="#">Privacy Policy</a></li>
							<li><a href="#">Terms & Conditions</a></li>
						</ul>
					</div>
					<div class="col-md-3 col-lg-2 mb-sm-4 mb-3">
						<h5>Address</h5>
						<h5>EventMploy Victoria, Australia</h5>
					</div>
					<div class="col-md-3 d-flex flex-md-column flex-row align-items-center col-lg-2 mb-md-4 mb-3">
						<h5>Download Now</h5>

						<p class="ml-md-0 ml-3"><a href="#"><img src={appleStore} class="img-fluid" alt="icon" /></a></p>
						<p class="ml-md-0 ml-3"><a href="#"><img src={googleStore} class="img-fluid" alt="icon" /></a></p>
					</div>
					<div class="col-md-12 text-center">
						<div class="copyright">
							<h5>© EventMploy, 2020</h5>
						</div>
					</div>
				</div>
			</div>
		</footer>
            </>
        );
    }
}
export default Footer;