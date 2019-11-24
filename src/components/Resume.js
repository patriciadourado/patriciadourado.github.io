import React from 'react';

class Resume extends React.Component{
    render(){
        return(
            <section id="resume" className="grey-section">
                <div className="row section-intro">
                    <div className="col-twelve">
                        <h5>Resume</h5>
                        <h1>More of my background.</h1>
                        <p className="lead">I had my Bachelor degree in Computer Engineering at Vale do São Francisco Federal 
                        University - Juazeiro da Bahia, Brazil. I am always looking for 
                        new areas to explore and contribute.</p>
                    </div>   		
                </div>{/*  <!-- /section-intro-->  */}
                <div className="row resume-timeline">
                    <div className="col-twelve resume-header">
                        <h2>Work Experience</h2>
                    </div> {/* <!-- /resume-header --> */}
                    <div className="col-twelve">
                        <div className="timeline-wrap">
                            <div className="timeline-block">
                                <div className="timeline-ico">
                                    <i className="fa fa-briefcase"></i>
                                </div>
                                <div className="timeline-header">
                                    <h3>Engineer Analyst</h3>
                                    <p>February 2018 - April - 2019</p>
                                </div>
                                <div className="timeline-content">
                                    <h4>Citibank - Budapest, Hungary</h4>
                                    <p>Testing, evaluating and defining network security solutions and strategies;</p>
                                </div>
	   			            </div> {/* <!-- /timeline-block --> */}
                            <div className="timeline-block">
                                <div className="timeline-ico">
                                    <i className="fa fa-briefcase"></i>
                                </div>
                                <div className="timeline-header">
                                    <h3>Freelancer developer</h3>
                                    <p>September 2017 - January 2018</p>
                                </div>
                                <div className="timeline-content">
                                    <h4>Photographic Collection System - Itaú</h4>
                                    <p>Modeling and implementing a MySQL database for multimedia files of a web photographic collection system;</p>
                                </div>
                            </div> {/* <!-- /timeline-block --> */}
                            <div className="timeline-block">
                                <div className="timeline-ico">
                                    <i className="fa fa-briefcase"></i>
                                </div>
                                <div className="timeline-header">
                                    <h3>IT Intern</h3>
                                    <p>November 2015 - July 2017</p>
                                </div>
                                <div className="timeline-content">
                                    <h4>Vale do São Francisco Federal University - Petrolina, Brazil</h4>
                                    <p>Planning, developing and testing desktop applications using C++ Builder (Embarcadero);</p>
                                </div>
                            </div> {/* <!-- /timeline-block --> */}
                            <div className="timeline-block">
                                <div className="timeline-ico">
                                    <i className="fa fa-briefcase"></i>
                                </div>
                                <div className="timeline-header">
                                    <h3>Web Development Intern</h3>
                                    <p>May 2015 - June 2015</p>
                                </div>
                                <div className="timeline-content">
                                    <h4>National Institute of Social Security (INSS) - Juazeiro da Bahia, Brazil</h4>
                                    <p>Development and maintenance of social security website in logistics sector using basic HTML and PHP;</p>
                                </div>
                            </div> 
                            <div className="timeline-block">
                                <div className="timeline-ico">
                                    <i className="fa fa-briefcase"></i>
                                </div>
                                <div className="timeline-header">
                                    <h3>Software Development Intern</h3>
                                    <p>July 2014 - August 2014</p>
                                </div>
                                <div className="timeline-content">
                                    <h4>Arteries Studio KFT - Őrbottyán, Hungary</h4>
                                    <p>Development of an android application, which distributes and detects rooms availability by mobile motion sensors. The application uses voice recognition and JSON data-interchange format via API on a web server;</p>
                                </div>
                            </div>{/* <!-- /timeline-block --> */}
   			            </div> {/* <!-- /timeline-wrap --> */}   			
   		            </div> {/* <!-- /col-twelve --> */}
   	            </div> {/* <!-- /resume-timeline --> */}
   	
                <div className="row resume-timeline">
                    <div className="col-twelve resume-header">
                        <h2>Education</h2>
                    </div> {/* <!-- /resume-header --> */}
                    <div className="col-twelve">
                        <div className="timeline-wrap">
                            <div className="timeline-block">
                                <div className="timeline-ico">
                                    <i className="fa fa-graduation-cap"></i>
                                </div>
                                <div className="timeline-header">
                                    <h3>Bachelor Degree</h3>
                                    <p>July 2017</p>
                                </div>
                                <div className="timeline-content">
                                    <h4>Vale do São Francisco Federal University - Juazeiro da Bahia, Brazil</h4>
                                    <p>Computer Engineering; Senior Thesis – Graduation Degree: Simulation hardware in the loop of a quadcopter. Simulation of a quadcopter using a dynamic mathematical model of the aircraft solved using the 4th order Runge-Kutta numerical method and executed in real time in Linux RTAI;</p>
                                </div>
                            </div>{/*  <!-- /timeline-block --> */}
                            <div className="timeline-block">
                                <div className="timeline-ico">
                                    <i className="fa fa-graduation-cap"></i>
                                </div>
                                <div className="timeline-header">
                                    <h3>Exchange Program</h3>
                                    <p>July 2013 - September 2014</p>
                                </div>
                                <div className="timeline-content">
                                    <h4>Budapest University of Technology and Economics - Budapest, Hungary</h4>
                                    <p>Electrical Engineering and Software Engineering student. Scholarship by Science Without Borders Program;</p>
                                </div>
                            </div> {/* <!-- /timeline-block --> */}
                        </div> {/* <!-- /timeline-wrap -->   	 */}		
                    </div> {/* <!-- /col-twelve --> */}
                </div> {/* <!-- /resume-timeline --> */}
	        </section> 
        );
    }
}

export default Resume;