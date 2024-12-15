import "./NavMenu.css";
import NavLink from "../NavLink/NavLink";
import Switch from "../Switch/Switch";
export default function NavMenu () {
  const links = [
    { href: "#home", text: "Home", classMod: "is--first" },
    { href: "#introduction", text: "Introduction", classMod: "is-- second" },
    { href: "#projects", text: "Projects", classMod: "is--third" },
    { href: "#skills", text: "Skills", classMod: "is--fourth" },
    { href: "#team", text: "Team", classMod: "is--fourth" },
    { href: "/blog", text: "blog", classMod: "is--sixth", hide: true },
    { href: "#contact", text: "Contact", classMod: "is--sixth" },
  ];
  return (
    <nav role="navigation" className="nav-menu w-nav-menu">
      <div className="add_nav_wrap">
        <div className="link_div">
          {links.map(({href, text, classMod, hide},index) => (
            <NavLink key={index} href={href} text={text} classMod={classMod} className={`hover_link_wrap w-inline-block ${hide?"is-hide":''}`}>
              
              <div className=" link_anim">
                <div className=" anim_wr">
                  <div className="lowercase custom-3d-transfrom">
                    {text}
                  </div>
                  <div className={`nav-link0-down ${classMod} custom-3d-style`}>
                    {text}
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
