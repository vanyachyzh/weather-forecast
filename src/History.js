import React, { useState } from "react"

function History() {
    return (
        <ul className="history">
            {
                (localStorage.getItem("list")).split(",").map((element) => {
                    return (<li key={element.toString()}>{element}</li>)
                })
            }
        </ul>
    )
}

export default History;