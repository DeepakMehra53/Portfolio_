import './NavLink.css'
export default function NavLink({href,text}){
    return (
      <a href={href} className="hover_link_wrap w-inline-block w--current">
        <div className="link_anim">
          <div className="anim_wr">
            <div className="lowercase nav-link custom-3d-transfrom">{text}</div>
            <div className="uppercase nav-link-down custom-3d-style">{text}</div>
          </div>
        </div>
      </a>
    );
}