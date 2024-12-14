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
            <NavLink key={index} href={link.href} text={link.text} >
                <div className="relative flex flex-col mr-0 overflow-visible ">
                    <div className="relative flex flex-col overflow-visible">
                        <div className="block p-0 text-sm font-semibold text-white upercase custom-3d-transfrom">{link.text.toLowerCase()}</div>
                        <div className="absolute block p-0 text-sm font-semibold text-white uppercase landing-[1.3] nav-link-down is--first custom-3d-style">{link.text}</div>
                    </div>
                </div>
            </NavLink>
          ))}
        </div>
        <Switch />
      </div>
    </nav>
  );
};
