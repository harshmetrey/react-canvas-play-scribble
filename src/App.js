import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store";
import { ToastContainer, toast, Zoom } from "react-toastify";

import Home from "./containers/Home";
import DrawingArea from "./containers/DrawingArea";
import PlayerLobby from "./containers/PlayerLobby";

import "react-toastify/dist/ReactToastify.css";

import "./style.css";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <ToastContainer draggable={false} autoClose={5000} />
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/player-lobby" component={PlayerLobby} />

                <Route exact path="/play-area" component={DrawingArea} />
              </Switch>
            </BrowserRouter>
          </header>
        </div>
      </Provider>
    </div>
  );
}
