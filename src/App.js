import React from "react";
import {Route, Link} from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";


export default function App() {
  return (
    <main>
      <Header />

      <div className='link-holder'>
      <Link className='nav-link' to='/'>Home</Link>
      <Link className='nav-link' to='/CharacterList'>Characters</Link>
      </div>

      <Route exact path='/'>
        <WelcomePage/>
      </Route>
      <Route path='/CharacterList'>
        <CharacterList/>
      </Route>
      
    </main>
  );
}
