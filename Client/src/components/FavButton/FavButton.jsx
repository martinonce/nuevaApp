import styled from "./FavButton.module.css"

const FavButton = ({isFav, onClick})=> {
    return(//Render Fav Icon if the favorite estatus is true
        <>
            {
                isFav ? (
                    <button className={styled.favButtonOn} onClick={onClick}>❤️</button>
                ) : (
                    <button className={styled.favButtonOff} onClick={onClick}>🤍</button>
                )
            }
        </>
    )

}

export default FavButton