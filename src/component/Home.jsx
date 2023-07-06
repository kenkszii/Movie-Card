import React from "react";
import "../static/css/style.css";

function Home() {
  return (
    <div className="main">
      <div className="navbar">
        <div className="icon">
          <h2 className="logo">
            
              <a className="me" href="/moviecard">
                MovieCard
              </a>
            
          </h2>
        </div>

        <div className="menu">
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/">ABOUT</a></li>
            <li><a href="/">SERVICE</a></li>
            <li><a href="/">BLOG</a></li>
            <li><a href="/">CONTACT</a></li>
          </ul>
        </div>

      </div>
      <div className="content">
        <h1>
          Welcome To Our
          <br />
          <span>
            Movie Search
          </span>
          <br />App!
        </h1>

        <p className="par">Our app is designed to help you easily find and explore your favorite movies.
          <br />With our user-friendly search interfaceyou can quickly search for any movie by title
          <br /> and get instant results from our extensive movie database.
          <br />
          <br /> So what are you waiting for?
          <br />Start exploring and discovering your favorite movies today with our movie search app!
        </p>

        <button className="cn">
          <a className="me2" href="/moviecard">
            Search Now
          </a>
        </button>

        <div className="form">
          <h2>
            Login Here
          </h2>

          <input type="email" name="email" placeholder="Enter Email Here" />
          <input type="password" name="" placeholder="Enter Password Here" />
          <button className="btnn">
            <a href="/moviecard">
              Login
            </a>
          </button>

          <p className="link">
            Don't have an account
            <br />
            <a href="/sign-up">
              Sign up here
            </a>
          </p>
        </div>
      </div>

    </div>


  );
};

export default Home;
