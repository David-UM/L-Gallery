import { useState, useEffect } from 'react'
import MyGallery from "./components/MyGallery.jsx"
import MyHeader from "./components/MyHeader"
import FakeData from "./data/FakeData.js"
import Photo  from "./components/Photo"
import SearchBar from './components/SearchBar'
import './App.css'


function App() {

  let [state, setState] = useState("")

  const handleOnChange = (e) => {
    return setState(state = e.target.value.toLowerCase(),)
  };

  /* const PhotoList =  */

  return (
    <div className="App">
       <MyHeader/>
       <SearchBar handle={handleOnChange}/>
       <MyGallery estado={state}/>
        

    </div>
  )
}

export default App
