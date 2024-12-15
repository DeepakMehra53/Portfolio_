import "./NavMenu.css";
import NavLink from "../NavLink/NavLink";
import Switch from "../Switch/Switch";
export default function NavMenu () {
  const links = [
    { href: "#home", label: "Home", classMod: "is--first" },
    { href: "#introduction", label: "Introduction", classMod: "is-- second" },
    { href: "#projects", label: "Projects", classMod: "is--third" },
    { href: "#skills", label: "Skills", classMod: "is--fourth" },
    { href: "#team", label: "Team", classMod: "is--fourth" },
    { href: "/blog", label: "blog", classMod: "is--sixth", hide: true },
    { href: "#contact", label: "Contact", classMod: "is--sixth" },
  ];
  return (
    <nav role="navigation" className="nav-menu w-nav-menu">
      <div className="add_nav_wrap">
        <div className="link_div">
          {links.map(({href, label, classMod, hide},index) => (
            <NavLink key={index} href={href} className={`hover_link_wrap w-inline-block ${hide?"is-hide":''}`}>
              <div className=" link_anim">
                <div className=" anim_wr">
                  <div className=" custom-3d-transfrom">
                    {label}
                  </div>
                  <div className={`nav-link0-down ${classMod} custom-3d-style`}>
                    {label}
                  </div>
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
