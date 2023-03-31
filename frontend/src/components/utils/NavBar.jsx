import { ImCart } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function NavBar() {
  const jwtToken = document.cookie.substring(
    document.cookie.indexOf("jwtToken=") + 9
  );

  const handleClick = (e) => {
    const navigations_list = document.querySelectorAll(".navigations")[0];
    const heading = document.querySelector(".welcome");
    if (
      navigations_list.style.display === "" ||
      navigations_list.style.display === "none"
    ) {
      navigations_list.style.display = "block";
      heading.style.display = "none";
    } else {
      navigations_list.style.display = "none";
      heading.style.display = "block";
    }
  };
  return (
    <nav class="navbar">
      <div class="logo">
        <Link id="logo" to="/" />
      </div>

      <div class="nav-menu-icon" onClick={() => handleClick()}>
        <GiHamburgerMenu />
      </div>

      <div class="navigations">
        <div className="navigation">
          {!window.location.href === "https://gingerx.netlify.app/" && (
            <Link className="nav-item" to="/">
              Home
            </Link>
          )}
        </div>
        <div className="navigation">
          <Link className="nav-item" to="/about">
            About
          </Link>
        </div>
        <div className="navigation">
          <Link className="nav-item" to="/cart">
            Cart
            <ImCart />
          </Link>
        </div>
        <div className="navigation">
          {jwtToken ? (
            <Link className="nav-item" to="/profile">
              Profile
            </Link>
          ) : (
            !window.location.href === "https://gingerx.netlify.app/login" && (
              <Link className="nav-item" to="/login">
                Log in
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
