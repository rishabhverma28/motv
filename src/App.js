import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
// import homepageSVG from "./Images/combined.svg";
import SiteImage from "./Components/SiteImage/SiteImage";
import Searcher from "./Components/Searcher/Searcher";

function App() {
    return (
        <div className="App">
            <Header />
            <SiteImage />
            {/* <img src={homepageSVG} alt="site intro" className="site-image" /> */}
            <Searcher />
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
