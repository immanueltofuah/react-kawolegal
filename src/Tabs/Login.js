import React from "react";
import { Link } from 'react-router-dom';

function Login () {
    return (
    <div>
         <div class="row ice">
        <div class="col-md-2 tea">
         <img class="sign" src="images/23.png" alt="logo"/>  
         <div class="col-md-1 see">
             <h1>KAWO</h1>
         <h1>LEGAL</h1>
         </div>
         
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-5 ">
            <ul>
                <li><Link to="./">Home</Link></li>
                 <li><Link to="./Startup">Startup</Link></li>
                 <li><Link to="./register">Register</Link></li>
                 <li><Link to="./login">Login</Link></li>

             </ul>
        </div>

    </div>
    
    
    <div class="house">
        <br/>
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <h4>Already a member? Login to add your Startup.
                </h4>
                <br/>
                <br/>
                <h6>Email Address</h6>
                <input class="form-control form-control-lg finder" type="text" placeholder="Email" aria-label=".form-control-lg example"/>
                <br/>
                <h6>Password</h6>
                <input class="form-control form-control-lg finder" type="text" placeholder="Password" aria-label=".form-control-lg example"/>
                <br/>
                <button type="button" class="btn btn-primary btn-lg">Sign in</button>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                          
              </div>

            <div class="col-md-2"></div>
        </div>
        <br/>
    </div>
    
    <div class="row footer">
        <div class="col-md-6 detail"  >
              &copy; 2017 KawoLegal All Rights Reserved!
        <br/>
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-3 symbol">
           




              <a href="google.com"class="fa fa-facebook social"></a>
              <a href="google.com"class="fa fa-twitter social"></a>
              <a href="google.com"class="fa fa-linkedin social"></a>
              <a href="google.com"class="fa fa-instagram social"></a>

       </div>
    </div>
    </div>
    )
}

export default Login;