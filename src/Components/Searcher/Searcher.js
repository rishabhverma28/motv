import React, { Component } from "react";
import "./Searcher.css";
import MOTVList from "../MOTVList/MOTVList";

const API = "https://api.themoviedb.org/3/search/";
const API_KEY = "?api_key=" + process.env.REACT_APP_TMDB_API_KEY;
class Searcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queryResponse: {},
            searchText: "",
            isLoading: false,
            movie: true,
            searched: false,
            errorInFetching: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyChange = this.handleKeyChange.bind(this);
        this.handleMovieorTV = this.handleMovieorTV.bind(this);
    }

    handleKeyChange(evt) {
        if (evt.key === "Enter") {
            alert("pressed");
            this.handleClick();
            // return;
        } else {
            this.setState({
                searchText: evt.target.value
            });
        }
    }
    handleMovieorTV(evt) {
        // alert();
        // console.log(evt.target.dataset.id);
        evt.target.dataset.id === "movie"
            ? this.setState({ movie: true })
            : this.setState({ movie: false });
    }
    handleEnter(evt) {
        if (evt.keyCode === 13) {
            this.handleClick();
        } else {
            return;
        }
        // return;
        // } else {
        // }
    }
    handleClick() {
        // console.log(evt.target.value);
        const addedString = this.state.searchText
            .replace(/ /g, "+")
            .toLowerCase();
        let movieOrTV = this.state.movie ? "movie" : "tv";
        // debugger;
        console.log(addedString);
        const URL_FORMED = API + movieOrTV + API_KEY + "&query=" + addedString;
        console.log(URL_FORMED);

        fetch(URL_FORMED)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(data =>
                this.setState({
                    isLoading: true,
                    queryResponse: data,
                    searched: true
                })
            )
            .catch(err => {
                console.log(err);
                this.setState({ searched: true, errorInFetching: true });
            });
        // console.log(t);
    }
    render() {
        // this.state.movie?:
        const movieOrTV = this.state.movie ? "Movie" : "TV Show";
        return (
            <div className="searcher">
                <div className="searcher-container">
                    <div className="selector-buttons">
                        <button
                            className={
                                this.state.movie
                                    ? "selector-buttons-movie active"
                                    : "selector-buttons-movie"
                            }
                            data-id="movie"
                            onClick={this.handleMovieorTV}
                        >
                            Movie
                        </button>
                        <button
                            className={
                                this.state.movie
                                    ? "selector-buttons-tv"
                                    : "selector-buttons-tv active"
                            }
                            // className="selector-buttons-tv"
                            data-id="tv"
                            onClick={this.handleMovieorTV}
                        >
                            TV
                        </button>
                    </div>
                    <label
                        htmlFor="title-name"
                        className="searcher-container-label"
                    >
                        Search for your favourite {movieOrTV}
                    </label>
                    <input
                        id="title-name"
                        type="text"
                        className="searcher-container-input"
                        onKeyDown={this.handleEnter}
                        onChange={this.handleKeyChange}
                        autoComplete="off"
                    />
                    <button
                        className="searcher-container-button"
                        onClick={this.handleClick}
                    >
                        Search
                    </button>
                </div>
                {this.state.searched && this.state.errorInFetching && (
                    <div className="MOTV-list-error">
                        Sorry, there was an error in fetching your request
                    </div>
                )}
                {this.state.searched && !this.state.errorInFetching && (
                    <MOTVList data={this.state.queryResponse} />
                )}
            </div>
        );
    }
}

export default Searcher;
