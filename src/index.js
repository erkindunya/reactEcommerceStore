import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import About from "./components/About";
import Contact from "./components/Contact";
import Store from "./components/Store";
import Home from "./components/Home";
import SubSection from './components/SubSection';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/Store/:service" component={SubSection} />
        <Route path="/About" component={About} />
        <Route path="/Store" component={Store} />
        <Route path="/Contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
