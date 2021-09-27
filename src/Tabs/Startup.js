import React from "react";
import { Link } from 'react-router-dom';

function Startup (){    
    return (
        <div>
        <div className="row ice">
        <div className="col-md-2 tea">
         <img className="sign" src="images/23.png" alt="logo"/>  
         <div className="col-md-1 see">
             <h1>KAWO</h1>
         <h1>LEGAL</h1>
         </div>
         
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-5 ">
            <ul>
                <li><Link to="/">Home</Link></li>
                 <li><Link to="/Startup">Startup</Link></li>
                 <li><Link to="/register">Register</Link></li>
                 <li><Link to="/login">Login</Link></li>

             </ul>
        </div>
        
    </div>
    
    

    <div className="house">
        <br/>
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <input className="form-control form-control-lg finder" type="text" placeholder=".search Startup by name or industry" aria-label=".form-control-lg example"/>

            </div>
            <div className="col-md-2">
                <button type="button" className="btn btn-primary btn-lg search">
                    <svg c xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search searcher" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>Search</button>

            </div>
        </div>
        <div/>
        <br/>
        <br/> 
        <div className="row">
            <div className=" col-md-4 think">
                <img className="image" src="images/20.png" alt="logo"/>
                
            </div>
            <div className=" col-md-8 thof">
                <p className="text-primary look">Think & Zoom</p>
                <p className="me">Providing solutions for the visually impaired,such as mind-controlled zooming and wearable controlled zooming.</p>
                <button type="button" className="btn btn-outline-dark border">See full details</button>
            </div>
           
            <div className="line"></div>
        </div>
        <br/>
        <br/>
        <div className="row">
            <div className=" col-md-4 think cube">
                <img className="image" src="images/22.png" alt="logo "/>
                
            </div>
            <div className=" col-md-8 thof">
                <p className="text-primary slate">Slate Cube</p>
                <p className="me">Slatecube helps job seekers develop job-reevant skils, gain work esperience, and land well paying jobs through
                              world-className up-skilling and virtual internships. </p>
                <button type="button"href="home.html" className="btn btn-outline-dark border">See full details</button>
            </div>
            <br/>
            <div className="line"></div>
        </div>
        <br/>
        <br/>
        <div className="row">
            <div className=" col-md-4 think car">
                <img className="image" src="images/21.png" alt="logo"/>
                
            </div>
            <div className=" col-md-8 thof">
                <p className="text-primary slate">Sleekjob Academy</p>
                <p className="me">Trains world className software developers in Ghana and matches them to employment opportunities </p>
                <button type="button" className="btn btn-outline-dark border">See full details</button>
            </div>
            

            <div className="line"></div>
        </div>
        <br/>
        <br/>
        <div className="row footer">
            <div className="col-md-6 detail"  >
                  &copy; 2017 KawoLegal All Rights Reserved!
            <br/>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3 symbol">
                

                <a href="google.com"className="fa fa-facebook social"></a>
                <a href="google.com"className="fa fa-twitter social"></a>
                <a href="google.com"className="fa fa-linkedin social"></a>
                <a href="google.com"className="fa fa-instagram social"></a>

                
               
                 
           </div>
        </div>
        
        
    </div>
</div>

    )
}

export default Startup;