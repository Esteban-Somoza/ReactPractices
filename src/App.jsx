import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

  let apiCall = async (url) => {
    let call = await fetch(url)
    let data = await call.json()
    console.log(data);
    return data
  }

  let createGif = async (gif) => {
    let gifData = await (gif);
    let newGif = Object({
      id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
      url: gifData.images.preview_gif.url
    })

    return setData([...data, newGif])
  }

  // let gifs = [1, 2, 3]

  let fetchGif = async () => {
    let gif = await apiCall("https://api.giphy.com/v1/gifs/random?api_key=7RP8L6dNh6gnJKifExh0AQJHe8KzwRiL&tag=&rating=g")
    return gif.data
  }

  return (
    <div className="App">
      <h1>lista {data.length}</h1>
      <h1>crear Gif</h1>
      <button onClick={() => createGif(fetchGif())}>Create new gif</button>
      <img src={reactLogo} alt="" />
      <ul>
        {
          data.map((element) =>
            <li key={element.id}>
              <img src={element.url} alt="" key={element.id} />
            </li>)
        }
      </ul>
    </div>
  )
}

export default App
