import React from "react";

const Favorites = ({ onCityButtonPress }) => {
    const favoritesList = localStorage.getItem("favoritesList");


    // const onDeleteButtonPress = (event) => {
    //     event.stopPropagation();
    //     const targetElementName = event.target.parentNode.innerText.replace(/[×]/g, "").replace(/\s/g, '');
    //     const targetElement = event.target.parentNode;
    //     const favoritesList = localStorage.getItem("favoritesList").split(",")
    //     let index = favoritesList.indexOf(targetElementName)
    //     favoritesList.splice(index)
    //     localStorage.getItem("favoritesList", favoritesList)
    //     console.log(favoritesList)
    //     targetElement.remove(targetElement);
    // }

    return (
        <ul className="favorites">
            {favoritesList !== null
                ? favoritesList.split(",").map((element) => {
                    return <li key={Math.random()} onClick={onCityButtonPress}>{element}</li>
                })
                : <div className="emptyList">You don't have favorites!</div>
            }
        </ul>
    )
}

export default Favorites;