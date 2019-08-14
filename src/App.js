import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
// import homepageSVG from "./Images/combined.svg";
import SiteImage from "./Components/SiteImage/SiteImage";
import Homepage from "./Components/Homepage/Homepage";
import TitleInfo from "./Components/TitleInfo/TitleInfo";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
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
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //             Edit <code>src/App.js</code> and save to reload.
        //         </p>
        //         <a
        //             className="App-link"
        //             href="https://reactjs.org"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             Learn React
        //         </a>
        //     </header>
    );
}

export default App;
