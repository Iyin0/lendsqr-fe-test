import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Links from "../data/sideNavLinks";
import '../styles/sideNav.scss'
import { useAppSelector, useAppDispatch } from "../reducer/hooks";
import { toggleState } from "../reducer/sideNavState";
import { motion } from "framer-motion";
import avatar from '../images/image 4.png'

const SideNav = () => {

    const location = useLocation()
    const navRoutes = useRef<HTMLDivElement>(null!)
    const sideNavState = useAppSelector((state) => state.sideNav.value)
    const dispatch = useAppDispatch()
    const [showDropdown, setShowDropdown] = useState(false)
    const navigate = useNavigate()

    const logout = () => {
        window.localStorage.setItem('isLoggedIn', 'false')
        setShowDropdown(false)
        navigate('/login')
        window.location.reload()
    }

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
        <aside
            className={sideNavState ? "" : "hide"}>
            <div className="sideNav">
                <div className="profile">
                    <button onClick={() => setShowDropdown(!showDropdown)}>
                        <img src={avatar} alt="" />
                        <p>Adedeji</p>
                        <svg className={showDropdown ? 'reverse' : ''} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.39229 12.0516C9.72823 12.425 10.2751 12.4219 10.6079 12.0516L13.4829 8.857C13.8188 8.48434 13.6852 8.182 13.1845 8.182H6.81567C6.31489 8.182 6.18363 8.48746 6.51723 8.857L9.39229 12.0516Z" fill="#213F7D" />
                        </svg>
                    </button>
                    {showDropdown &&
                        <motion.div className="dropdown"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <button onClick={() => setShowDropdown(false)}>Profile</button>
                            <button onClick={logout}>Logout</button>
                        </motion.div>
                    }
                </div>
                <button onClick={() => dispatch(toggleState(false))}>
                    <img src={Links.organization} alt="" />
                    <span>Switch Organization</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0573 3.9938C11.8984 3.15271 13.1595 4.45646 12.3184 5.25489L7.56759 10.0056C7.23127 10.3841 6.64282 10.3841 6.3065 10.0056L1.64002 5.38131C0.841037 4.54022 2.10267 3.27907 2.94322 4.12022L6.937 8.114L11.0573 3.9938Z" fill="#213F7D" />
                    </svg>
                </button>
                <Link to='#' className="dashboard" onClick={() => dispatch(toggleState(false))}>
                    <img src={Links.dashboard} alt="" />
                    Dashboard
                </Link>
                <div className="customers" ref={navRoutes}>
                    <p>CUSTOMERS</p>
                    {Links.customers.map((link, index) => (
                        <Link to={link.href} key={index} id={link.text} onClick={() => dispatch(toggleState(false))}>
                            <img src={link.icon} alt="" />
                            {link.text}
                        </Link>
                    ))}
                </div>
                <div className="business">
                    <p>BUSINESS</p>
                    {Links.business.map((link, index) => (
                        <Link to={link.href} key={index} onClick={() => dispatch(toggleState(false))}>
                            <img src={link.icon} alt="" />
                            {link.text}
                        </Link>
                    ))}
                </div>
                <div className="settings">
                    <p>SETTINGS</p>
                    {Links.settings.map((link, index) => (
                        <Link to={link.href} key={index} onClick={() => dispatch(toggleState(false))}>
                            <img src={link.icon} alt="" />
                            {link.text}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="blank" onClick={() => dispatch(toggleState(false))}>

            </div>
        </aside>
    );
}

export default SideNav;