import './Home.css'
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      
      <div className='text-center' >
        <div>
          <h1>Welcome to my E-commerce shop</h1>
        </div>
        <div class="embed-responsive embed-responsive-21by9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/W15bB6OsPXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>


      </div>
    )
  }
}
