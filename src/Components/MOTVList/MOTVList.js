import React, { Component } from "react";
import "./MOTVList.css";
import MOTVListItem from "../MOTVListItem/MOTVListItem";
import { Link } from "react-router-dom";

class MOTVList extends Component {
    render() {
        const POSTER_PATH_PREFIX = "https://image.tmdb.org/t/p/w154/";
        let items = this.props.data.results.map(val => {
            // debugger;
            const title = val.original_title || val.name;
            const posterImg =
                val.poster_path === null
                    ? "https://via.placeholder.com/150x231?text=Poster"
                    : POSTER_PATH_PREFIX + val.poster_path;
            return (
                <Link
                    to={{
                        pathname: `/title/${val.id}`,
                        state: {
                            data: { val }
                        }
                    }}
                    key={val.id}
                >
                    <MOTVListItem posterPath={posterImg} title={title} />
                </Link>
            );
        });
        return <div className="MOTV-list">{items}</div>;
    }
}

export default MOTVList;
