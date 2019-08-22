import React from "react";
import "./MOTVListItem.css";

function MOTVListItem(props) {
    return (
        <div className="MOTV-list-item">
            <img
                className="MOTV-list-item-img"
                src={props.posterPath}
                alt="poster"
            />
            <div className="MOTV-list-item-title">{props.title}</div>
        </div>
    );
}

export default MOTVListItem;
