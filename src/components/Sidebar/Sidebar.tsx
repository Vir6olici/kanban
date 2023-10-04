import React, { useEffect, useState } from 'react';

import classes from './Sidebar.module.css';
import logo from '../../../public/logo.svg';
import hideEyeLogo from '../../../public/hideEyeLogo.svg';
import showEyeLogo from '../../../public/showEyeLogo.svg';
import SidebarList from './SidebarList/SidebarList';
import ToggleButton from './ToggleButton/ToggleButton';
import axios, { AxiosResponse } from 'axios';
import { Board } from '../../interfaces/boards.interface';

const Sidebar = () => {

    const [boards,setBoards] = useState<Board[]>([]);
    const [isOpen,setIsOpen] = useState<Boolean>(false);

    useEffect( () => {
        async function getBoardsName() {
            const response: AxiosResponse<Board[]> = await axios.get("http://localhost:3000/boards");
            setBoards(response.data);
        };
        getBoardsName();
    },[])

    function hideSidebarHandler(){
        isOpen === true ? setIsOpen(false) : setIsOpen(true);
    }

    return (
        <React.Fragment>
            <div className={`${classes.sidebar} ${isOpen === true ? `${classes.active}` : ''}`}>
                <div className={classes.title}>
                    <img alt="logo" src={logo} />
                </div>
                <div className={classes.sidebarContent }>
                    <div className={classes.sidebarContentTop}>
                        <h4 className={classes.sidebarContentTopTitle}> ALL BOARDS (3) </h4>
                        <SidebarList boards={boards}></SidebarList>
                    </div>
                    <div className={classes.sidebarContentBottom}>
                        <ToggleButton> </ToggleButton>
                        <div className={classes.sidebarContentBottomHide}>
                            <button onClick={hideSidebarHandler} className={classes.sidebarContentBottomHideButton}>
                                <img alt="hideEyeLogo" src={hideEyeLogo} /> 
                                <label className={classes.sidebarContentBottomHideLabel}> Hide Sidebar </label>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${isOpen === false ? `${classes.hideShowButton}` : `${classes.activeShowButton}`} `}>
                <button onClick={hideSidebarHandler} className={classes.floatingShowButton}>
                    <img alt="showEyeLogo" src={showEyeLogo} />
                </button>
            </div>
        </React.Fragment>
    )
}

export default Sidebar;