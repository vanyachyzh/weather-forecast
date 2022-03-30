import React from "react";

const History = ({ onCityButtonPress }) => {
    const historyList = localStorage.getItem("historyList");

    return (
        <ul className="history" >
            {historyList !== null
                ? localStorage.getItem("historyList").split(",").map((element) => {
                    return (<li key={Math.random()} onClick={onCityButtonPress}>{element}</li>)
                })
                : <div className="emptyList">Your history is empty!</div>
            }
        </ul>
    )
}

export default History;