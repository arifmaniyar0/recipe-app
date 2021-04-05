import React from 'react';
import './App.css';
import Food from './Components/Food.js'
import Header from './Components/Header.js'
import FoodResults from './Components/FoodResults.js'
import { foodReducer } from './FoodReducer.js'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import RecipeDetails from './Components/RecipeDetails.js'
import Geocode from "react-geocode";

function App() {

  var store = createStore(foodReducer);
  store.subscribe(() => console.log('store', store.getState()));
  return (
  <Provider store={store}>
  <div className="App">
    <Router>
        {/* <Header /> */}
      <Switch>
      <Route exact path='/'>
        <Food />
        <FoodResults />
      </Route>
      <Route path='/details'>
        <RecipeDetails />
      </Route>
      <Route path='/test'>
        <Test />
      </Route>
      </Switch>
    </Router>
  </div>
  </Provider>
  );
}

const Test = () => {
  // Geocode.setLanguage("en");
  // Geocode.setRegion("ind");
  // Geocode.setLocationType("ROOFTOP");
  // Geocode.enableDebug();

  Geocode.fromLatLng("48.8583701", "2.2922926").then(
    (response) => {
      const address = response.results[0].formatted_address;
      console.log(address);
    },
    (error) => {
      console.error(error);
    }
  );
  return (
    <div style={{backgroundColor:'gray', height: '100vh', color: 'white'}}>
      test
    </div>
  )
}

export default App;
