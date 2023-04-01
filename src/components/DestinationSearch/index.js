// Write your code here
import {Component} from 'react'
import './index.css'

import DestinationItem from '../DestinationItem'

// const DestinationSearch = props => {

class DestinationSearch extends Component {
  state = {search: ''}

  getSearchInput = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {search} = this.state
    console.log(search)
    const filteredDestinationList = destinationsList.filter(eactItem =>
      eactItem.name.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <ul className="page_container">
        <h1 className="heading">Destination Search</h1>
        <div className="input_container">
          <input type="search" onChange={this.getSearchInput} value={search} />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="icon"
          />
        </div>
        <div className="items_container">
          {filteredDestinationList.map(eachItem => (
            <DestinationItem key={eachItem.id} item={eachItem} />
          ))}
        </div>
      </ul>
    )
  }
}

export default DestinationSearch
