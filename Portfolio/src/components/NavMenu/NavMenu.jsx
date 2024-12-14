import "./NavMenu.css";
import NavLink from "../NavLink/NavLink";
import Switch from "../Switch/Switch";
export default function NavMenu () {
  const links = [
    { href: "#home", text: "Home" },
    { href: "#introduction", text: "Introduction" },
    { href: "#projects", text: "Projects" },
    { href: "#skills", text: "Skills" },
    { href: "#blogs", text: "Blogs" },
    { href: "#contact", text: "Contact" },
  ];
  return (
    <nav className="nav-menu w-nav-menu">
      <div className="add_nav_wrap">
        <div className="link_div">
          {links.map((link, index) => (
            <NavLink key={index} href={link.href} text={link.text} />
          ))}
        </div>
        <Switch />
      </div>
    </nav>
  );
};
