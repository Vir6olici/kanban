import React from 'react';
import classes from './SidebarList.module.css'
import SidebarListItem from '../SidebarListItem/SidebarListItem';
import { Board } from '../../../interfaces/boards.interface';
import SidebarListIcon from '../SidebarListIcon/SidebarListIcon';

interface SidebarListProps{
    boards: Board[]
}

const SidebarList = (props: SidebarListProps) => {
    console.log(props.boards);

    return (
        <React.Fragment>
            <div className={classes.sidebarContentTopList}>
                {
                    props.boards.map( (board: Board, index: number) => {
                        return (
                            <SidebarListItem label={board.name} key={index} />
                        )
                    })
                }
                <button className={classes.sidebarCreateNewBoardButton}>
                    <SidebarListIcon color='#635FC7'/>
                    <h5 className={classes.sidebarCreateNewBoardButtonLabel}> + Create New Board </h5>
                </button>
            </div>
        </React.Fragment>
    )
}

export default SidebarList;