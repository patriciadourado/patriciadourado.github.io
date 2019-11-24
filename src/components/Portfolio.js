import React from 'react';
import Modal from 'react-bootstrap/Modal';

class Portfolio extends React.Component{  
    state = {show: null};
    hideModal(id){
        this.setState({show:id});
    }  
    showModal(id){
        this.setState({show:id});
    }
    render(){
        return(
            <section id="portfolio">
                <div className="row section-intro">
                    <div className="col-twelve">
                        <h5>Portfolio</h5>
                        <h1>Some Stuffs.</h1>
                        <p>Those are some of the projects I developed during university and self learning;</p>
                        <hr></hr>
                    </div>   		
                </div>
                <div className="row portfolio-content">
               		<div className="col-twelve">{/* <!-- portfolio-wrapper --> */}
                        <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
                            <div className="bgrid folio-item">
                                <div className="item-wrap">                                        
                                    <img src={require("../images/portfolio/quad_board.jpg")} alt="HIL Simulation"/>
                                    <div className="overlay" onClick = {() => this.showModal('modal-01')}>
                                       <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">HIL Simulation</h3>	     					    
                                                <span className="folio-types">Quadcopter Model</span>
                                            </div>	                      	
                                        </div>                                           
                                    </div>
                                    <Modal show={this.state.show === 'modal-01'} style={{zIndex:1000}}>
                                        <div className="popup-modal slider mfp">	
                                            <div className="media">
                                                <img src={require("../images/portfolio/modals/m-quad.jpg")} 
												alt="HIL Simulation" />
                                            </div>      	
                                            <div className="description-box">
                                                <h4>Hardware In The Loop Simulation</h4>		      
                                                <p>Simulation of a quadcopter using a dynamic mathematical model of the aircraft, 
												solved using the 4th order Runge-Kutta numerical method and executed in real time with Linux RTAI. 
												The HIL system uses a microcontroller (PIC18F2580) for open-loop control of the simulated process through a Joystick that provides inputs to the system;</p>
                                                <div className="categories">Quadcopter Model</div>			               
                                            </div>
                                            <div className="link-box">
                                                <a className="popup-modal-dismiss" onClick={()=>this.hideModal('null')}>Close</a>
                                            </div>		      
                                        </div>
                                    </Modal>{/* <!-- /modal-01 --> */}
                                </div>	               
                            </div> {/* <!-- /folio-item --> */}

                            <div className="bgrid folio-item">
                                <div className="item-wrap">
                                    <img src={require("../images/portfolio/avifa.jpg")} alt="AVIFA"/>
                                    <div className="overlay" onClick = {() => this.showModal('modal-02')}>
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">AVIFA</h3>	     					    
                                                <span className="folio-types">Virtual Environment</span>		     		
                                            </div>  	                      	
                                        </div>                    
                                    </div>
                                    <Modal show={this.state.show === 'modal-02'} style={{zIndex:1000}}>
                                        <div className="popup-modal slider mfp">
                                            <div className="media">
                                                <img src={require("../images/portfolio/modals/m-avifa.jpg")} alt="AVIFA" />
                                            </div>      	
                                            <div className="description-box">
                                                <h4>AVIFA - Ambiente Virtual Interativo de Fisiologia Animal</h4>		      
                                                <p>Virtual Environment for Teaching Animal Physiology applied to Veterinary Medicine and Animal Science using flash and html;</p>
                                                <div className="categories">Virtual Environment</div>			               
                                            </div>
                                            <div className="link-box">
                                                <a className="popup-modal-dismiss" onClick={()=>this.hideModal('null')}>Close</a>
                                            </div>		      
                                        </div>
                                    </Modal>{/* <!-- /modal-02 --> */}
                                </div>
                            </div> {/* <!-- /folio-item --> */}

                            <div className="bgrid folio-item">
                                <div className="item-wrap">
                                    <img src={require("../images/portfolio/app-ru.jpg")} alt="University Restaurant App"/>
                                    <div className="overlay" onClick = {() => this.showModal('modal-03')}>             		                  
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">University Restaurant App</h3>	     					    
                                                <span className="folio-types">Desktop Software Development</span>		     		
                                            </div> 	                      	
                                        </div>                    
                                    </div>
                                    <Modal show={this.state.show === 'modal-03'} style={{zIndex:1000}}>
                                        <div className="popup-modal slider mfp">	
                                            <div className="media">
                                                <img src={require("../images/portfolio/modals/m-app-ru.jpg")} alt="University Restaurant App" />
                                            </div>      	
                                            <div className="description-box">
                                                <h4>University Restaurant Application</h4>		      
                                                <p>A desktop application to select students able to use the university restaurant based on their university enrollment status 
												and institution website registration. It uses three different databases sources and avoids duplication;</p>
                                                <div className="categories">Desktop Software Development</div>			               
                                            </div>
                                            <div className="link-box">
                                                <a className="popup-modal-dismiss" onClick = {()=>this.hideModal('null')}>Close</a>
                                            </div>		      
                                        </div>
                                    </Modal>{/* <!-- /modal-03 --> */}
                                </div>
                            </div>{/* <!-- /folio-item -->      */}
                            <div className="bgrid folio-item">
                                <div className="item-wrap">
                                    <img src={require("../images/portfolio/react-weather.jpg")} alt="React Weather App"/>
                                    <div className="overlay" onClick={()=>this.showModal('modal-04')}>
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">React Weather App</h3>	     					    
                                                <span className="folio-types">React Application</span>		     		
                                            </div> 	                      	
                                        </div>                    
                                    </div>
                                    <Modal show={this.state.show === 'modal-04'} style={{zIndex:1000}}>
                                        <div className="popup-modal slider mfp">	
                                            <div className="media">
                                                <img src={require("../images/portfolio/modals/m-react-weather.jpg")} alt="React Weather App" />
                                            </div>      	
                                            <div className="description-box">
                                                <h4>React Weather App</h4>		      
                                                <p>The application uses an API from openweathermap.org and displays some weather current information 
                                                as Temperature, Humidity and condition based on the City and Country name/code. It also shows two charts of 5 days Forecasts charts
                                                for Temperature;</p>
												<p>You can check it here: <a href="https://patriciadourado.com/react-weather-app/" target="_blank" rel="noopener noreferrer">Weather Application</a></p>
                                                <div className="categories">React Application</div>			               
                                            </div>
                                            <div className="link-box">
                                                <a className="popup-modal-dismiss" onClick = {()=>this.hideModal('null')}>Close</a>
                                            </div>		      
                                        </div>
                                    </Modal>{/* <!-- /modal-04 --> */}
                                </div>
                            </div>
                        </div> {/* <!-- /portfolio-wrapper -->  */}
   		            </div> {/*  <!-- /twelve -->    */}
   	            </div> {/* <!-- /portfolio-content --> */}	
	            <hr></hr>
                <div className="row section-intro">
                    <div className="col-twelve">
                        <h1>Registered Softwares</h1>
                        <hr></hr>
                        <ul align="left">			  			  
                            <li>Sistema de Seleção de Estudantes Aptos a Utilizarem o Restaurante Universitário da UNIVASF. 2018. BR512018051945-8 (INPI - Brazil);</li>
                            <li>Jogo de Reciclagem - Conscientização Ambiental com Foco na Coleta Seletiva de Lixo. 2018. BR512018051942-3 (INPI - Brazil);</li>
                            <li>Acervo Fotográfico. 2018. BR512018051946-6 (INPI - Brazil);</li>
                        </ul>
                    </div>
                </div>
            </section> /* <!-- /portfolio -->  */
        );
    }
}

export default Portfolio;