import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  // const favorites = useState([])

  let apiCall = async (url) => {
    let call = await fetch(url)
    let data = await call.json()
    return data
  }

  let addFavorite = (e) => {
    console.log(e);
    favorites.push(e)
  }

  let createGifs = async (search) => {
    let gifSet = []
    for (let i = 0; i < 10; i++) {
      let gifData = await fetchGif(search);
      let newGif = Object({
        id: i,
        url: gifData.images.preview_gif.url
      })
      gifSet.push(newGif);
    }
    return setData(gifSet)
  }

  // let gifs = [1, 2, 3]

  let fetchGif = async (search) => {
    let gif = await apiCall("https://api.giphy.com/v1/gifs/random?api_key=7RP8L6dNh6gnJKifExh0AQJHe8KzwRiL&tag=&rating=g")
    return gif.data
  }

  return (
    <div className="App">
      <h1>Buscar Gifs</h1>
      <div className='btn'>
        <img src={reactLogo} alt="" />
        <button className="create" onClick={() => createGifs()}>Create new gif</button>
        <img src={reactLogo} alt="" />
      </div>
      <ul className='grillaGifs'>
        {
          data.map((element) =>
            <li className="gifs" key={element.id}>
              <img src={element.url} alt="" key={element.id} />
              {/* <button type="button" class="cancelar" onClick={() => addFavorite(element)}>
                +
              </button> */}
            </li>)
        }
      </ul>
      {/* <h1>Favorites: {favorites.length}</h1> */}
    </div>
  )
}

export default App
