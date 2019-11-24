import React from 'react';

class About extends React.Component{
    render(){
        return(
            <section id="about">  
                <div className="row section-intro">
                    <div className="col-twelve">
                        <h5>About</h5>
                        <h1>A little about myself.</h1>
                        <div className="intro-info">
                            <img src={require("../images/profile-pic.jpg")} alt=""/>
                            <p className="lead">Hi, surprise! earth is round and I am someone who loves traveling, nature, knowing different cultures and solve problems. 
                            I always bring with me the idea that we are not perfect and we must be kind and respectful to all living beings.                             
                            When I am doing something I like to be deeply involved to achieve the best results otherwise I get bored.</p>
                        </div>   			
                    </div>   		
                </div>
                <div className="row about-content">
                    <div className="col-six tab-full">
                        <h3>Profile</h3>
                        <p>I am always trying to improve myself in any direction my professional life guides me. Basically I want to develop the environment I am inserted;</p>
                        <ul className="info-list">
                            <li>
                                <strong>Fullname:</strong>
                                <span>Patricia Nunes Dourado</span>
                            </li>
                            <li>
                                <strong>Job:</strong>
                                <span>Engineer Analyst</span>
                            </li>
                            <li>
                                <strong>Website:</strong>
                                <span>patriciadourado.com</span>
                            </li>
                            <li>
                                <strong>Email:</strong>
                                <span>contact@patriciadourado.com</span>
                            </li>
                            <li>
                                <strong>Hobbies:</strong>
                                <span>Volleyball, Play Canastra, Counter-Strike</span>
                            </li>
                            <li>
                                <strong>Addicts:</strong>
                                <span>Coffee, Traveling, Potato Soup</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-six tab-full">
                        <h3>Skills</h3>
                        <p>During my university course I used to code in low level languages for embedded systems applications, now I am learning about Flask and React;</p>
                            <ul className="skill-bars">
								<li>
									<div className="progress percent80"><span>80%</span></div>
									<strong>C/C++</strong>
								</li>
								<li>
									<div className="progress percent80"><span>80%</span></div>
									<strong>SQL DATABASES</strong>
								</li>
								<li>
									<div className="progress percent60"><span>60%</span></div>
									<strong>Javascript</strong>
								</li>
								<li>
									<div className="progress percent60"><span>60%</span></div>
									<strong>HTML+CSS</strong>
								</li>
								<li>
									<div className="progress percent40"><span>40%</span></div>
									<strong>MATLAB</strong>
								</li>
								<li>
									<div className="progress percent35"><span>35%</span></div>
									<strong>PYTHON</strong>
								</li>
                            </ul>
                    </div>
                </div>
                <div className="row button-section">
                    <div className="col-twelve">
                        <a href="#contact" title="Keep in touch" className="button stroke smoothscroll">Keep in touch</a>
                        <a href="resume.pdf" title="Download CV" className="button button-primary">Download CV</a>
                    </div>   		
                </div>
            </section>
        );
    }

}

export default About;