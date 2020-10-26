import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './SearchBar.css'

export default class SearchBar extends React.Component{

  render() {

    return(
      <div>
        <input type="text" class="fas" placeholder="&#61442;   Search by lot code and description...... "/>
      </div>
    )
  }
}