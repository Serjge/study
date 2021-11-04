import React from 'react'
import c from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}><a href='#profile'>Profile</a></div>
            <div className={c.item}><a href='#message'>Message</a></div>
            <div className={c.item}><a href='#musik'>Music</a></div>
            <div className={c.item}><a href='#news'>News</a></div>

            <div className={c.item}><a href='#setings'>Setings</a></div>
        </nav>
    )

}
export default Navbar