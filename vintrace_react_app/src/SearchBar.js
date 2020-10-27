import React from 'react'
import './SearchBar.css'
import axios from "axios"
export default class SearchBar extends React.Component{

  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`http://localhost:3000/:vintraceID`)
      .then(({ data }) => {
        this.setState({
          results: data.data                             
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

  render() {
    return (
      <input
        placeholder="&#61442;   Search by lot code and description......" 
        ref={input => this.search = input}
        onChange={this.handleInputChange}
      />
    )
  }

}