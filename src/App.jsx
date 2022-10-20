import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Myheader from "./components/Myheader"
import FakeData from "./data/FakeData.js"
import Photo  from "./components/Photo"
import a from "./assets/Photos/Photo-1.jpeg"
import './App.css'
import SearchBar from './components/SearchBar'

function App() {

  let [state, setState] = useState("")

  const handleOnChange = (e) => {
    return setState(state = e.target.value)
  };

  /* const PhotoList =  */

  return (
    <div className="App">
       <Myheader/>
       <SearchBar handle={handleOnChange}/>
       {/* <h1>{state}</h1>
       <input className="FirstSearchBar" type="text" onChange={handleOnChange}/> */}
        {
          state === ""?FakeData.map((photo) => 
          <Photo number={photo.img.toString()} alt={photo.mood} key={photo.img.toString()}/>
          )
          :FakeData.filter(photo => photo.mood === state).map((photo) => 
          <Photo number={photo.img.toString()} alt={photo.mood} key={photo.img.toString()}/>
          )
  
            
          
        }

    </div>
  )
}

export default App
