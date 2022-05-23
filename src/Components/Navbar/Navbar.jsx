import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="Nav">
        <div className="N1">
          <img
            src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg"
            alt="Logo"
            className="NavLogo"
          />
          <ul>
            <li>How it works</li>
            <li>Browse Jobs</li>
          </ul>
        </div>
        <div className="NavEnd">
          <ul>
            <li>Login</li>
            <li>Sign up</li>
          </ul>
          <button className="Navbtn">Post a Project</button>
        </div>
      </div>
      <div className="N2">
        <ul>
          <li>Find Jobs</li>
          <li>Find Freelancers</li>
          <li>Get Ideas</li>
          <li>Resources</li>
        </ul>
      </div>
    </>
  );
};
