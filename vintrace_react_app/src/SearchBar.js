import React from 'react'
import './SearchBar.css'

export default class SearchBar extends React.Component{

  render() {

    return(
      <form autocomplete="off" action="">
        <input placeholder="&#61442; Search by lot code and description......" class="fontAwesome"></input>
        
      </form>
    )
  }
}