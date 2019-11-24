import React from 'react';

class Menu extends React.Component{
    render(){
        return(
            <header>
                <div className="row">
                    <div className="top-bar">
                        <a id="menu" className="menu-toggle" href="#menu"><span>Menu</span></a>
                        <div className="logo">
                            <a href="#">MENU</a>
                        </div>		      
                        <nav id="main-nav-wrap">
                            <ul className="main-navigation">
                                <li><a className="smoothscroll" href="#intro" title="">Home</a></li>
                                <li><a className="smoothscroll" href="#about" title="">About</a></li>
                                <li><a className="smoothscroll" href="#resume" title="">Resume</a></li>
                                <li><a className="smoothscroll" href="#portfolio" title="">Portfolio</a></li>
                                <li><a className="smoothscroll" href="#contact" title="">Contact</a></li>
                            </ul>
                        </nav>    		
                    </div>
                </div> 	 
            </header>	
        );
    }
}

export default Menu;