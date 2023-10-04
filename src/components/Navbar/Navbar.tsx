import React from 'react';
import classes from './Navbar.module.css';
import MenuIcon from '../../../public/menu.svg';

interface NavbarProps{
    boardName: string;
}

const Navbar = (props: NavbarProps) => {

    return (
        <React.Fragment>
            <div className={classes.navbar}>
                <h2 className={classes.navbarTitle}> {props.boardName} </h2>
                <div className={classes.control}>
                    <button className={classes.button} disabled={true}> + Add New Task</button>
                    <button className={classes.menuButton}> 
                        <img alt="menuLogo" src={MenuIcon} />
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Navbar;