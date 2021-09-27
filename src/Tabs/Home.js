function Home() {
  return (
    <div>
      <div className="back-image">
        <div className="row logo">
          <div className="col-md-2 moon">
            <img className="icon" src="images/23.png" alt="logo" />
            <div className="col-md-1 see ">
              <h1 className="kawo">KAWO</h1>
              <h1 className="legal">LEGAL</h1>
            </div>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-5 ">
            <ul>
              <div className="house">
              <li><link to="./">Home</link></li>
                 <li><link to="./Startup">Startup</link></li>
                 <li><link to="./register">Register</link></li>
                 <li><link to="./login">Login</link></li>
              </div>
            </ul>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 content">
              <h2>KAWOLEGAL</h2>
              <h3>
                A collaborative ecosystem for problem solvers and support for
                Startups.
              </h3>
              <br />
              <button type="button" className="btn btn-primary">
                Register Now!
              </button>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      <div className="row footer">
        <div className="col-md-6 detail">
          &copy; 2017 KawoLegal All Rights Reserved!
          <br />
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3 symbol">
          <a href="google.com" className="fa fa-facebook social"></a>
          <a href="google.com" className="fa fa-twitter social"></a>
          <a href="google.com" className="fa fa-linkedin social"></a>
          <a href="google.com" className="fa fa-instagram social"></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
