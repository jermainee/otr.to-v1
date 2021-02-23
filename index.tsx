import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FrontPage from "./src/FrontPage";
import Chat from "./src/Chat";

import "bulma";

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" exact component={FrontPage} />
            <Route path="/chat" component={Chat} />
        </div>
    </Router>,
    document.getElementById("root")
);
