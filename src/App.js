import React from "react";
import { Route, Switch } from "react-router-dom";

import CardMaps from "./screens/MapContact/MapContact";
import Contact from "./screens/Contact/Contact";
import Help from "./components/Help/Help";
import Home from "./screens/Home/Home";
import Navigation from "./components/Header/Header";
import TextToSpeech from "./screens/TextEditor/TextEditor";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/outils" component={(Help, TextToSpeech)} />
        <Route path="/professionnels" component={CardMaps} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
