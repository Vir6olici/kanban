import React, { useState } from "react";
import classes from './SidebarListItem.module.css';
import SidebarListIcon from "../SidebarListIcon/SidebarListIcon";
import { NavLink } from "react-router-dom";

interface SidebarListItemProps {
    label: string,
}

const SidebarListItem = (props: SidebarListItemProps) => {
    const [clicked, setClicked] = useState(false);
    return (
        <React.Fragment> 
            <NavLink 
                to={`/board/${props.label}`}
                className={({isActive}) =>  {
                        if(isActive){
                            setClicked(true);
                        }else {
                            setClicked(false);
                        }
                        return isActive ?  `${classes.sidebarContentTopItemClicked}` : `${classes.sidebarContentTopItem}`
                    }}
                end 
                >
                    {
                        clicked ? 
                            <React.Fragment>
                                <SidebarListIcon color='white'/>
                                <h5 className={classes.sidebarContentTopItemLabelClicked}> {props.label} </h5>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <SidebarListIcon color='#828FA3'/>
                                <h5 className={classes.sidebarContentTopItemLabel}> {props.label} </h5>
                            </React.Fragment>
                    }
            </NavLink> 
        </React.Fragment>
    )
}

export default SidebarListItem;