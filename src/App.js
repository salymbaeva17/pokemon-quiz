import PokemonGame from "./components/PokemonGame";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import Starwars from "./components/Starwars";
import Task1 from "./components/Task1";
import Cat from "./components/Cat";
import UserInfo from "./components/UserInfo";
import Users from "./components/Users";



function App() {
  return (
    <Router>
        <Header />
        <Route exact path="/"><Home /></Route>
        <Route path="/cat"><Cat /></Route>
        <Route path="/pokemon"><Pokemon /></Route>
        <Route path="/pokemongame"><PokemonGame /></Route>
        <Route path="/starwars"><Starwars /></Route>
        <Route path="/people"><Task1 /></Route>
        <Route path="/users"><Users /></Route>
        <Route path="/user/:id"><UserInfo /></Route>

    </Router>
  );
}

export default App;
