import React from 'react'
import './SearchBar.css'
import axios from "axios"
import Suggestions from "./Suggestions"
export default class SearchBar extends React.Component{

  state = {
    query: '',
    results: []
  }

  getInfo = (vintraceID) => {
    axios.get(`http://localhost:3000/${vintraceID}`).then(({ data }) => {
      this.setState({
        results: data.data,
      })
    })
  }

  handleInputChange = () => {
    const vintraceIDs = ['11YVCHAR001', '11YVCHAR002', '15MPPN002-VK'] // array of valid IDs that correspond to json

    this.setState({ query: this.search.value }, () => {
      if (this.state.query && this.state.query.length > 1) {
        vintraceIDs.map((id) => {
          if (id === this.state.query) {
            this.getInfo(id) // will pass a valid vintrace ID in to the getInfo method to send to backend
          }
        })
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="&#61442;   Search by lot code and description......"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
        <Suggestions results={this.state.results} />
      </form>
      )
    }
    
  }
  