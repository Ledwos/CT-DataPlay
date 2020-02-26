import React from 'react';
import logo from './logo.svg';
import './App.css';
import ElecFetch from './components/ElecFetch';

function App() {
  return (
    <div className="App">
      <p>text in App.js</p>
      <ElecFetch />

    </div>
  );
}

export default App;


// THE PLAN:
// SWITCHID - a8823b4b-1abe-41de-a5b3-ab6700c08d98

// FETCH FROM LINK

// ^componentdidmount

// setState? <-- elecResults

// map elecResults 

// ^order by price (lowest to highest)

// ^elecResults[i][expectedMonthlySpend]

//delete all create-react-app files you don't need


// PUT SWITCHID INTO ENV FILE!




