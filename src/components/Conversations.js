import React from 'react';
import DashboardHeader from './snippet/DashboardHeader';
import { Link } from 'react-router-dom';

const Conversations = () => {
    return(
        <>
        <DashboardHeader/>
		<main className="page-dashboard">
			<div className="container-fluid">
				<div className="row page-info mb-4">
					<div className="col-lg-10 col-xl-7">
						<h1>My <span>conversations</span></h1>
						<p className="d-none d-md-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat neque urna, a vestibulum tellus sollicitudin ut. Vivamus dictum, dolor eget placerat mollis, risus tortor ornare nisi, at interdum urna dui eget urna.</p>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12">
						<div className="chat-area mb-md-4 d-flex w-100">
							<div className="chat-list d-flex flex-column">
								<form action="/" className="input-group input-chat-search">
								  <div className="input-group-prepend">
								    <span className="input-group-text text-secondary pr-lg-2 pr-1 pl-ld-4 pl-3 border-0 bg-transparent" id="basic-addon1"><i className="fas fa-search"></i></span>
								  </div>
								  <input type="text" className="form-control pl-2 border-0 bg-transparent" placeholder="Search here" />
								</form>

								<div className="chat-contact-list w-100 flex-grow-1 overflow-auto">
									<div className="chat-contact contact-online position-relative w-100 d-flex align-items-center">
										<span className="contact-auth">eb</span>
										<div className="contact-name">
											<strong className="text-truncate w-100">Elise Beverley</strong>
											<span className="d-none d-md-block">3rd March 2021</span>
											<span className="d-block text-truncate w-100 d-md-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus repudiandae dolor maiores consequatur at voluptatibus reiciendis maxime, temporibus eum modi?</span>
										</div>
										<div className="contact-date d-block d-md-none">
											3rd Mar
											<span className="badge">2</span>
										</div>
									</div>
									<div className="chat-contact contact-online position-relative w-100 d-flex align-items-center">
										<span className="contact-auth">eb</span>
										<div className="contact-name">
											<strong className="text-truncate w-100">Elise Beverley</strong>
											3rd March 2021
										</div>
										<div className="contact-date d-block d-md-none">
											3rd Mar
										</div>
									</div>
									<div className="chat-contact position-relative w-100 d-flex align-items-center">
										<span className="contact-auth">eb</span>
										<div className="contact-name">
											<strong className="text-truncate w-100">Elise Beverley</strong>
											3rd March 2021
										</div><div className="contact-date d-block d-md-none">
											3rd Mar
										</div>
									</div>
									<div className="chat-contact position-relative w-100 d-flex align-items-center">
										<div className="contact-active"></div>
										<span className="contact-auth">eb</span>
										<div className="contact-name">
											<strong className="text-truncate w-100">Elise Beverley</strong>
											3rd March 2021
										</div>
										<div className="contact-date d-block d-md-none">
											3rd Mar
										</div>
									</div>
									<div className="chat-contact position-relative w-100 d-flex align-items-center">
										<div className="contact-active"></div>
										<span className="contact-auth">eb</span>
										<div className="contact-name">
											<strong className="text-truncate w-100">Elise Beverley</strong>
											3rd March 2021
										</div>
										<div className="contact-date d-block d-md-none">
											3rd Mar
										</div>
									</div>
									<div className="chat-contact position-relative w-100 d-flex align-items-center">
										<div className="contact-active"></div>
										<span className="contact-auth">eb</span>
										<div className="contact-name">
											<strong className="text-truncate w-100">Elise Beverley</strong>
											3rd March 2021
										</div>
										<div className="contact-date d-block d-md-none">
											3rd Mar
										</div>
									</div>
									<div className="chat-contact position-relative w-100 d-flex align-items-center">
										<div className="contact-active"></div>
										<span className="contact-auth">eb</span>
										<div className="contact-name">
											<strong className="text-truncate w-100">Elise Beverley</strong>
											3rd March 2021
										</div>
										<div className="contact-date d-block d-md-none">
											3rd Mar
										</div>
									</div>
									<div className="chat-contact position-relative w-100 d-flex align-items-center">
										<div className="contact-active"></div>
										<span className="contact-auth">eb</span>
										<div className="contact-name">
											<strong className="text-truncate w-100">Elise Beverley</strong>
											3rd March 2021
										</div>
										<div className="contact-date d-block d-md-none">
											3rd Mar
										</div>
									</div>
									<div className="chat-contact position-relative w-100 d-flex align-items-center">
										<div className="contact-active"></div>
										<span className="contact-auth">eb</span>
										<div className="contact-name">
											<strong className="text-truncate w-100">Elise Beverley</strong>
											3rd March 2021
										</div>
										<div className="contact-date d-block d-md-none">
											3rd Mar
										</div>
									</div>
									<div className="chat-contact position-relative w-100 d-flex align-items-center">
										<div className="contact-active"></div>
										<span className="contact-auth">eb</span>
										<div className="contact-name">
											<strong className="text-truncate w-100">Elise Beverley</strong>
											3rd March 2021
										</div>
										<div className="contact-date d-block d-md-none">
											3rd Mar
										</div>
									</div>
									<div className="chat-contact position-relative w-100 d-flex align-items-center">
										<div className="contact-active"></div>
										<span className="contact-auth">eb</span>
										<div className="contact-name">
											<strong className="text-truncate w-100">Elise Beverley</strong>
											3rd March 2021
										</div>
										<div className="contact-date d-block d-md-none">
											3rd Mar
										</div>
									</div>
									<div className="chat-contact position-relative w-100 d-flex align-items-center">
										<div className="contact-active"></div>
										<span className="contact-auth">eb</span>
										<div className="contact-name">
											<strong className="text-truncate w-100">Elise Beverley</strong>
											3rd March 2021
										</div>
										<div className="contact-date d-block d-md-none">
											3rd Mar
										</div>
									</div>
									<div className="chat-contact position-relative w-100 d-flex align-items-center">
										<div className="contact-active"></div>
										<span className="contact-auth">eb</span>
										<div className="contact-name">
											<strong className="text-truncate w-100">Elise Beverley</strong>
											3rd March 2021
										</div>
										<div className="contact-date d-block d-md-none">
											3rd Mar
										</div>
									</div>
									<div className="chat-contact position-relative w-100 d-flex align-items-center">
										<span className="contact-auth">eb</span>
										<div className="contact-name">
											<strong className="text-truncate w-100">Elise Beverley</strong>
											3rd March 2021
										</div>
										<div className="contact-date d-block d-md-none">
											3rd Mar
										</div>
									</div>
									<div className="chat-contact position-relative w-100 d-flex align-items-center">
										<span className="contact-auth">eb</span>
										<div className="contact-name">
											<strong className="text-truncate w-100">Elise Beverley</strong>
											3rd March 2021
										</div>
										<div className="contact-date d-block d-md-none">
											3rd Mar
										</div>
									</div>
									<div className="chat-contact position-relative w-100 d-flex align-items-center">
										<span className="contact-auth">eb</span>
										<div className="contact-name">
											<strong className="text-truncate w-100">Elise Beverley</strong>
											3rd March 2021
										</div>
										<div className="contact-date d-block d-md-none">
											3rd Mar
										</div>
									</div>
								</div>
							</div>
							<div className="chat-section w-100">
								<div className="chat-header position-relative w-100 d-flex align-items-center">
									<button type="button" className="btn d-block d-md-none chat-back p-0 mr-3 text-secondary"><i className="fas fa-arrow-left"></i></button>
									<span className="contact-auth">eb</span>
									<div className="contact-name">
										<strong className="text-truncate w-100">Elise Beverley</strong>
										<span className="d-none d-md-block">3rd March 2021</span>
									</div>
									<Link to="/" className="btn btn-primary py-0 btn-hired">HIRED NOW</Link>
								</div>

								<div className="chat-messages">
									<div className="chat-messages-inner">
										<div className="chat-message chat-received flex-column d-flex">
											<div className="chat-text">
												<span className="contact-auth d-block d-md-none">eb</span>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat ligula vitae lorem semper molestie nec ac velit. Aliquam erat volutpat. Morbi volutpat non mauris a molestie.</p>
											</div>
											<div className="chat-time">
												3:00 PM
											</div>
										</div>
										<div className="chat-message chat-sent flex-column d-flex">
											<div className="chat-text">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat ligula vitae lorem semper molestie nec ac velit. Aliquam erat volutpat. Morbi volutpat non mauris a molestie.</p>
											</div>
											<div className="chat-time">
												3:00 PM
											</div>
										</div>
										<div className="chat-message chat-received flex-column d-flex">
											<div className="chat-text">
												<span className="contact-auth d-block d-md-none">eb</span>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat ligula vitae lorem semper molestie nec ac velit. Aliquam erat volutpat. Morbi volutpat non mauris a molestie.</p>
											</div>
											<div className="chat-time">
												3:00 PM
											</div>
										</div>
										<div className="chat-message chat-received flex-column d-flex">
											<div className="chat-text">
												<span className="contact-auth d-block d-md-none">eb</span>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat ligula vitae lorem semper molestie nec ac velit. Aliquam erat volutpat. Morbi volutpat non mauris a molestie.</p>
											</div>
											<div className="chat-time">
												3:00 PM
											</div>
										</div>
										<div className="chat-message chat-sent flex-column d-flex">
											<div className="chat-text">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat ligula vitae lorem semper molestie nec ac velit. Aliquam erat volutpat. Morbi volutpat non mauris a molestie.</p>
											</div>
											<div className="chat-time">
												3:00 PM
											</div>
										</div>
										<div className="chat-message chat-received flex-column d-flex">
											<div className="chat-text">
												<span className="contact-auth d-block d-md-none">eb</span>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat ligula vitae lorem semper molestie nec ac velit. Aliquam erat volutpat. Morbi volutpat non mauris a molestie.</p>
											</div>
											<div className="chat-time">
												3:00 PM
											</div>
										</div>
									</div>

									<div className="chat-type">
										<form action="/" className="d-flex align-items-center">
											<input type="text" placeholder="Type something..." className="form-control border-0" />
											<button type="submit" className="btn"><i className="fas fa-paper-plane"></i></button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
        </>
    )
}
export default Conversations