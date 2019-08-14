import React, { Component } from "react";
import "./TitleInfo.css";
import { ColorExtractor } from "react-color-extractor";
// import MOTVListItem from "../MOTVListItem/MOTVListItem";

class TitleInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            colors: []
        };
        this.posterRef = React.createRef();
        this.getColors = this.getColors.bind(this);
    }
    getData() {
        this.setState({
            data: this.props.location.state.data
        });
    }
    // delay = ms => new Promise(res => setTimeout(res, ms));
    // getColors() {
    //     // await this.delay(2000);
    //     const colorThief = new ColorThief();
    //     const result = colorThief.getColor(
    //         document.querySelector(".title-info-poster-img")
    //     );
    //     this.setState({
    //         colors: result
    //     });
    // }
    getColors = colors => {
        console.log(colors);
        this.setState({
            colors: colors
        });
    };
    componentDidMount() {
        this.getData();
        // this.getColors();
        // console.log("jkjdksjkdjskdjs", this.state.data.data.length);
    }
    render() {
        console.log(this.state);
        const POSTER_PATH_PREFIX = "https://image.tmdb.org/t/p/w342/";
        const BACKGROUND_IMAGE_PREFIX = "https://image.tmdb.org/t/p/original/";
        const info = this.state.data;
        if (!("val" in info)) {
            return <div>loading...</div>;
        } else {
            const backColor = this.state.colors[0] + "99";
            return (
                <div className="title-info">
                    <div
                        className="title-info-backdrop"
                        style={{
                            // backgroundColor: backColor,
                            backgroundImage: `url(${BACKGROUND_IMAGE_PREFIX +
                                info.val.backdrop_path})`,
                            backgroundSize: "cover",
                            boxShadow: `inset 0 0 250px ${backColor}`
                            // opacity: 0.7,
                            // zIndex: "-1"
                        }}
                    />
                    <div
                        className="title-info-rest"
                        style={{
                            backgroundColor: backColor,
                            boxShadow: `0px -10px 35px ${backColor}`
                        }}
                    >
                        <div className="title-info-poster">
                            <ColorExtractor getColors={this.getColors}>
                                <img
                                    src={
                                        POSTER_PATH_PREFIX +
                                        info.val.poster_path
                                    }
                                    alt="title poster"
                                    // ref={this.posterRef}
                                    onLoad={this.getColors}
                                    className="title-info-poster-img"
                                    // style={{
                                    //     boxShadow: `0 0 8px 8px ${backColor} inset`
                                    // }}
                                />
                            </ColorExtractor>
                        </div>
                        <div className="title-info-desc">
                            <div className="title-info-desc-title">
                                {info.val.original_title || info.val.name}
                            </div>
                            <div className="title-info-desc-date">
                                {info.val.release_date ||
                                    info.val.first_air_date}
                            </div>
                            <div className="title-info-desc-vote">
                                {info.val.vote_average}
                            </div>
                            {/* <div>{info.val.genre_ids.join(" ")}</div> */}
                            <div className="title-info-desc-overview">
                                {info.val.overview}
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            );
        }
    }
}

export default TitleInfo;
