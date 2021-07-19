import {useContext} from "react";
import classes from "./css/MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorites(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorites(props.id);
        } else {
            favoritesCtx.addFavorites({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div>
                    <img src={props.image} alt={props.title} className={classes.image}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite ? "Remove from favorites" : "To Favorites"}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;