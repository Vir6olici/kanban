import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import classes from './board.module.css';
import Navbar from "../../components/Navbar/Navbar";
import { useParams, Params} from "react-router-dom";

const Board = (props:any) => {
    const {id } = useParams()
    console.log(id);

    return (
        <React.Fragment>
            <div className={classes.board}>
                <Sidebar></Sidebar>
                <div className={classes.boardContent}>
                    <Navbar boardName={id}> </Navbar>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Board;