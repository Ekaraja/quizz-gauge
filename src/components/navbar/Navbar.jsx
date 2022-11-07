import React from 'react'
import superiorSymbol from "../../assets/icons/superior.svg";

const Navbar = () => {
    return (

        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item --blue">language arts</li>
                <ul className="nav-item__list">
                    <li className="nav-item --sub-category">
                        <img src={superiorSymbol} alt="superiorSymbol-icon" className='--grey' />
                        <span>grammar</span>
                    </li>
                </ul>
            </ul>
            <h1 className="title --blue">end punctuation</h1>
        </nav>
    )
}

export default Navbar