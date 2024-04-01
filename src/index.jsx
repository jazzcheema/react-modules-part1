import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
  import {foodsCollection} from './foods.jsx'
  import {remove, choice} from './helpers.jsx'



const root = ReactDOM.createRoot(document.getElementById('root'));

let pick = choice(foodsCollection)
remove(foodsCollection,pick)

let length = foodsCollection.length
root.render(
     <div>
      <h1>I'd like one {pick}, please.</h1>
      <h1>Here you go: {pick}</h1>
      <h1>Delicious! May I have another?</h1>
      <h3>I'm sorry, we're all out. We have {length} left</h3>
     </div>


);
