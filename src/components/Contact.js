import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <section id="contact">
                <div className="row section-intro">
                    <div className="col-twelve">
                        <h5>Contact</h5>
                        <p>Would you like to discuss any project or have a conversation?</p>
                    </div> 
                </div>{/*  <!-- /section-intro --> */}
                <div className="row contact-info">
                    <div className="col-four tab-full">
                        <div className="icon">
                            <i className="fa fa-map-marker"></i>
                        </div>
                        <h5>Where to find me</h5>
                        <p>Budapest, Hungary</p>
                    </div>
                    <div className="col-four tab-full">
                        <div className="icon">
                            <i className="fa fa-envelope"></i>
                        </div>
                        <h5>Email Me At</h5>
                        <p>contact@patriciadourado.com</p>
                    </div>
                    <div className="col-four tab-full">
                        <div className="icon">
                            <i className="fa fa-phone"></i>
                        </div>
                        <h5>Call Me At</h5>
                        <p>Ask me please :)</p>
                        {/* <p>Mobile: (+xx) xx xxx xxxx</p> */}
                    </div>
                </div> {/* <!-- /contact-info --> */}
            </section> /* <!-- /contact --> */
        );
    }
}

export default Contact;