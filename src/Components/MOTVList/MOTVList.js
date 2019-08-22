import React, { Component } from "react";
import "./MOTVList.css";
import MOTVListItem from "../MOTVListItem/MOTVListItem";
import { Link } from "react-router-dom";

class MOTVList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }
    updateWindowDimensions() {
        this.setState({
            windowWidth: window.innerWidth
        });
    }
    render() {
        const POSTER_PATH_PREFIX = "https://image.tmdb.org/t/p/w154/";
        const numColumns = Math.floor(this.state.windowWidth / 154) - 1;
        if (this.props.data.results.length) {
            let items = this.props.data.results.map(val => {
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
            return (
                <div
                    className="MOTV-list"
                    style={{
                        gridTemplateColumns: `repeat(${numColumns}, 1fr)`
                    }}
                >
                    {items}
                </div>
            );
        } else {
            return (
                <div className="MOTV-list-error"> Sorry, no results found</div>
            );
        }
    }
}

export default MOTVList;
