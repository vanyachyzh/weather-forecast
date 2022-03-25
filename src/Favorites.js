import React from "react"

function Favorites() {

    return (
            <ul className="favorites">
                {
                    (localStorage.getItem("list2")).split(",").map((element) => {
                        return <li key={element.toString()}>{element}</li>
                    })
                }
            </ul>
    )
}

export default Favorites;