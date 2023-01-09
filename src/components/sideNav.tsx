import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Links from "../data/sideNavLinks";
import '../styles/sideNav.scss'

const SideNav = () => {

    const location = useLocation()
    const navRoutes = useRef<HTMLDivElement>(null!)

    useEffect(() => {
        Array.from(navRoutes.current.children).forEach((child) => {
            child.classList.remove("stripe")

            if (location.pathname.includes('/users')) {
                if (child.id === 'Users') {
                    child.classList.add("stripe")
                }
            }
        })
    }, [navRoutes, location.pathname])


    return (
        <aside>
            <button>
                <img src={Links.organization} alt="" />
                <span>Switch Organization</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0573 3.9938C11.8984 3.15271 13.1595 4.45646 12.3184 5.25489L7.56759 10.0056C7.23127 10.3841 6.64282 10.3841 6.3065 10.0056L1.64002 5.38131C0.841037 4.54022 2.10267 3.27907 2.94322 4.12022L6.937 8.114L11.0573 3.9938Z" fill="#213F7D" />
                </svg>
            </button>
            <Link to='#' className="dashboard">
                <img src={Links.dashboard} alt="" />
                Dashboard
            </Link>
            <div className="customers" ref={navRoutes}>
                <p>CUSTOMERS</p>
                {Links.customers.map((link, index) => (
                    <Link to={link.href} key={index} id={link.text}>
                        <img src={link.icon} alt="" />
                        {link.text}
                    </Link>
                ))}
            </div>
            <div className="business">
                <p>BUSINESS</p>
                {Links.business.map((link, index) => (
                    <Link to={link.href} key={index}>
                        <img src={link.icon} alt="" />
                        {link.text}
                    </Link>
                ))}
            </div>
            <div className="settings">
                <p>SETTINGS</p>
                {Links.settings.map((link, index) => (
                    <Link to={link.href} key={index}>
                        <img src={link.icon} alt="" />
                        {link.text}
                    </Link>
                ))}
            </div>
        </aside>
    );
}

export default SideNav;