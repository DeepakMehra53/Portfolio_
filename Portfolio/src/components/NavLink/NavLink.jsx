import './NavLink.css'
export default function NavLink({href,text}){
    return (
      <a href={href} className="hover_link_wrap w-inline-block w--current">
        <div className="link_anim">
          <div className="anim_wr">
            <div className="nav-link">{text}</div>
            <div className="nav-link-down">{text}</div>
          </div>
        </div>
      </a>
    );
}