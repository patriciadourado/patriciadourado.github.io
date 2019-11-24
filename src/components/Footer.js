import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <footer>
                    <div className="row">
                        <div className="col-six tab-full pull-right social">
                            <ul className="footer-social">        
                            <li><a href="https://github.com/patriciadourado/" target="_blank" rel="noopener noreferrer">
							<i className="fa fa-github"></i></a></li>
                            <li><a href="https://linkedin.com/in/patricia-dourado/" target="_blank" rel="noopener noreferrer">
							<i className="fa fa-linkedin"></i></a></li>				  
                            <li><a href="https://instagram.com/apatnd/" target="_blank" rel="noopener noreferrer">
							<i className="fa fa-instagram"></i></a></li>				  
                            <li><a href="https://facebook.com/ndpatricias/" target="_blank" rel="noopener noreferrer">
							<i className="fa fa-facebook"></i></a></li>
                        </ul> 
                    </div>
                    <div className="col-six tab-full">
                        <div className="copyright">
                            <span>© Copyright <a href="https://patriciadourado.com" target="_blank" rel="noopener noreferrer">Patricia Dourado</a> 2019.</span> 
                            </div>		                  
                        </div>
                        <div id="go-top">
                            <a className="smoothscroll" title="Back to Top" href="#intro"><i className="fa fa-long-arrow-up"></i></a>
                        </div>
                    </div>
                    <div id="preloader"> 
                        <div id="loader"></div>
                    </div>
                </footer>  
                
            </React.Fragment>
        );
    }

}

export default Footer;