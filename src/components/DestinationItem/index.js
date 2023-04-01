// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {item} = this.props
    const {name, imgUrl} = item
    return (
      <li className="card">
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </li>
      // "search icon"  value={name}
    )
  }
}

export default DestinationItem
