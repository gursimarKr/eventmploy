import React from 'react';
import fewMoreDetails from '../assets/images/few-more-details.png';
import fewDetailsMob from '../assets/images/few-details-mob.png';
import dots from '../assets/images/dots.png';
import Header from './snippet/Header';
import Footer from './snippet/Footer';

const FewMoreDetails = () => {
    return(
        <>
        <Header/>
		<main className="page-access">
			<div className="page-image" style={{backgroundImage: `url(${fewMoreDetails})`}}>
				<img src={fewDetailsMob}className="w-100 d-block d-md-none" alt="imag" />
			</div>
			<div className="container container-xxl">
				<div className="row no-gutters">
					<div className="col-lg-5">
						<h1 className="mw-100">Just a few more details to get us <span>know you better</span></h1>
						
						<div className="form-area pt-md-3 pt-2">
							<form action="/">
								<div className="form-row">
									<div className="form-group col-12">
										<div className="form-field">
											<label>Phone number</label>
											<input id="tel-phone" className="form-control" placeholder="0444 441 465" type="tel"/>
										</div>
									</div>
									<div className="form-group col-12">
										<div className="form-field">
											<label>ABN</label>
											<input type="text" className="form-control" value="123-345-3455" />
										</div>
									</div>
									<div className="form-group col-12">
										<div className="form-field">
											<label>Location</label>
											<input type="text" className="form-control" value="Sydney, AU" />
										</div>
									</div>
									<div className="form-group col-12">
										<button className="btn btn-primary btn-block btn-lg mb-3 rounded-0 px-4 d-flex align-items-center">Continue <i className="fas ml-auto fa-arrow-right"></i></button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</main>

        <Footer/>
        </>
    )
}
export default FewMoreDetails