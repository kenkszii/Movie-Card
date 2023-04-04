import React from "react";


function SignUp() {
  return (
    <>
      <div className="container">
        <form>
          <div className="signup">
            Sign-Up Here
          </div>
          <label htmlFor="firstname">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Your first name.."
          />

          <label htmlFor="middlename">
            Middle Name
          </label>
          <input
            type="text"
            id="middlename"
            name="middlename"
            placeholder="Your middle name.."
          />

          <label htmlFor="lastname">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
          />

          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password.."
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default SignUp;
