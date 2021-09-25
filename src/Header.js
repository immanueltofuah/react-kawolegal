function Header(){
    return (
    <div className="back-image">
        <div class="row logo">
                <div className="col-md-2 moon">
                    <img className="icon" src="images/23.png" alt="logo"/>  
                    <div className="col-md-1 see">
                        <h1>KAWO</h1>
                    <h1>LEGAL</h1>
                    </div>
                    
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-5 ">
                    <ul>
                        <div className="house"><li><a href="Home.html" className="btn -primary btn-lg active tab" role="button" aria-pressed="true">Home</a></li>
                            <li><a href="Startup.html" className="btn -primary btn-lg active tab" role="button" aria-pressed="true">Startup</a></li>
                            <li><a href="Register.html" className="btn -primary btn-lg active tab" role="button" aria-pressed="true">Register</a></li>
                            <li><a href="Login.html" className="btn -primary btn-lg active tab" role="button" aria-pressed="true">Login</a></li>
                        </div>
                        </ul>
                </div>

            </div>
            </div>
    )
}

export default Header;



