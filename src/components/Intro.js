import React from 'react';

class Intro extends React.Component{
	render(){
        return(   
            <section id="intro">		
				<div className="intro-overlay"></div>	        
				<div className="intro-content">
                    <div className="row">
                        <div className="col-twelve">
                            <h5>Hello, World.</h5>
                            <h1>I'm Patricia Dourado.</h1>
                            <p className="intro-position">
                                <span>Computer Engineer</span>
                                <span>Human Being</span> 
                            </p>
                            <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>
                        </div>    
                    </div>   		 		
                </div>
                <ul className="intro-social">        
                    <li><a href="https://github.com/patriciadourado/" target="_blank" rel="noopener noreferrer">
					<i className="fa fa-github"></i></a></li>
                    <li><a href="https://linkedin.com/in/patricia-dourado/" target="_blank" rel="noopener noreferrer">
					<i className="fa fa-linkedin"></i></a></li>				  
                    <li><a href="https://instagram.com/apatnd/" target="_blank" rel="noopener noreferrer">
					<i className="fa fa-instagram"></i></a></li>				  
                    <li><a href="https://facebook.com/ndpatricias/" target="_blank" rel="noopener noreferrer">
					<i className="fa fa-facebook"></i></a></li>
                </ul> 
            </section>
        );
    }

}

export default Intro;