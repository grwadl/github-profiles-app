import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../myButton/MyButton';
import cl from './Navbar.module.scss';
import lightimage from './GitHub-Mark-Light-64px.png';
import darkimage from './GitHub-Mark-64px.png';
import AuthContext from '../../../context/AuthContext';
import moon from './icons8-do-not-disturb-ios-50.png';
import sun from './icons8-sun.svg';
import './MenuBurger.scss'
const NavBar = ({ themeToggler }) => {
    const publicLinks = [{ name: 'Login', to: '/login' }, { name: 'Registration', to: '/reg' }];
    const privateLinks = [{ name: 'Recently viewed', to: '/recently' }];
    const items = JSON.parse(localStorage.getItem('Userdata'));
    const { logout, theme } = useContext(AuthContext);
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        openMenu ? setOpenMenu(false) : setOpenMenu(true);
    }
    const setStyles = () => {

        if (openMenu) {
            document.body.classList.add('active');
            return cl.active;
        }

        else {
            document.body.classList.remove('active');
            return ''
        }
    }
    const setThemeStylesBurger = () => {
        if (theme === 'dark' || '') {
            return ' dark'
        }
        else {
            return ' light'
        }
    }
    return (
        <nav className={theme === 'dark' ? cl.Wrapper + ' ' + cl.darkTheme + ' ' + setStyles() : cl.Wrapper + ' ' + cl.lightTheme + ' ' + setStyles()} >
            <div className={cl.navWrapper}>
                <Link to='/' onClick={e => setOpenMenu(false)} className={cl.navLogo}><img src={theme === 'dark' ? lightimage : darkimage} alt="" />GITHUB PROFILES</Link>
                <div className={openMenu ? 'menu-burger__header open-menu' + setThemeStylesBurger() : 'menu-burger__header' + setThemeStylesBurger()} onClick={toggleMenu}>
                    <span></span>
                </div>
                <div className={openMenu ? cl.navItems + ' ' + cl.openedMenu : cl.navItems}>
                    <img src={theme === 'dark' || '' ? sun : moon} onClick={themeToggler} />
                    {items
                        ? privateLinks.map(link => <Link onClick={e => setOpenMenu(false)} key={link.name} to={link.to}>{link.name} </Link>)
                        : publicLinks.map(link => <Link onClick={e => setOpenMenu(false)} key={link.name} to={link.to}>{link.name} </Link>)
                    }
                    {items
                        ? <MyButton onClick={e => {
                            logout(items.token, items.id);
                            setOpenMenu(false);
                        }}>Log out</MyButton>
                        : ''
                    }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;