import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
// import homepageSVG from "./Images/combined.svg";
import Homepage from "./Components/Homepage/Homepage";
import TitleInfo from "./Components/TitleInfo/TitleInfo";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
        <HashRouter basename="/">
            <div className="App">
                <Header />
                <Switch>
                    {/* <SiteImage /> */}
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/title/:id" component={TitleInfo} />
                    {/* <img src={homepageSVG} alt="site intro" className="site-image" /> */}
                    {/* <Searcher /> */}
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
