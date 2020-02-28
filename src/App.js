import React from "react";
import ReactDom from "react-dom";
import {Route, Link} from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";


export default function App() {
  return (
    <main>
      <Header />
      <Link to='/'>Home</Link>
      <Link to='/CharacterList'>Characters</Link>
      <Route exact path='/'>
        <WelcomePage/>
      </Route>
      <Route path='/CharacterList'>
        <CharacterList/>
      </Route>
      
    </main>
  );
}
