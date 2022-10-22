import { useState, useEffect } from 'react'
import MyGallery from "./components/MyGallery.jsx"
import MyHeader from "./components/MyHeader"
import FakeData from "./data/FakeData.js"
import Photo  from "./components/Photo"
import SearchBar from './components/SearchBar'
import './App.css'


function App() {

  let [state, setState] = useState("")

  let [number, setNumber] = useState(FakeData.length)

  const handleOnChange = (e) => {
    setState(state = e.target.value.toLowerCase());
    setNumber(number = FakeData.filter(photo => photo.mood.join("-").toLowerCase().includes(state)).length)
    
  };
  
  /* const PhotoList =  */

  return (
    <div className="App">
       <div className="header">
       <MyHeader/>
       <SearchBar handle={handleOnChange} number={number}/>
       </div>
       
       <MyGallery estado={state}/>
        
        
    </div>
  )
}

export default App