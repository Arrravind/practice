import React from 'react'
import './css/App.css'

function App(props) {
  return (
    <div class="container">
      <div class="card">
        <div id="title">{props.title}</div>
        <div>
          <img src={props.img} alt=''></img>
        </div>
        <div>
          <ul>
            <li class="bi bi-heart">{props.likes}</li>
            <li class="bi bi-chat">{props.comments}</li>
            <li class="bi bi-send">{props.shares}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App

