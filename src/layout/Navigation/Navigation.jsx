import { Link } from "react-router-dom";
import "./Navigation.scss";
import logo from "../../assets/logo.png";
export const Navigation = ({ page }) => {
  const links = [
    {
      name: "coins",
      to: "/",
      text: "Coin List",
    },
    {
      name: "news",
      to: "/news",
      text: "News",
    },
  ];
  const getClassName = (name) => {
    if (name === page) {
      return "nav__list-item--active";
    }
    return "nav__list-item";
  };
  return (
    <div className="nav">
      <Link to={"/"} className="nav__site-logo">
        <img src={logo} className="nav__image" />
        <h1 className="nav__title">coinWatch</h1>
      </Link>
      <ul className="nav__list">
        {links.map((link) => {
          return (
            <li key={link.name} className={getClassName(link.name)}>
              <Link to={`${link.to}`} className="nav__link">
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
