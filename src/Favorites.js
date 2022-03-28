import React from "react";

function Favorites(props) {

    return ( 
            <ul className="favorites">
                {(localStorage.getItem("favoritesList"))!==null
                    ?(localStorage.getItem("favoritesList")).split(",").map((element) => {
                        return <li key={element.toString()} onClick={props.pressCityButton}>{element}</li>
                    })
                    : <div>Your list is empty</div>
                }
            </ul>
    )
}

export default Favorites;