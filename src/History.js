import React, { useState } from "react";

function History(props) {
    return (
        <ul className="history" >
            {localStorage.getItem("historyList")!==null
                ?(localStorage.getItem("historyList")).split(",").map((element) => {
                    return (<li key={element.toString()} onClick={props.pressCityButton}>{element}</li>)
                })
                :<div className="emptyList">Your history is empty!</div>
            }
        </ul>
    )
}

export default History;