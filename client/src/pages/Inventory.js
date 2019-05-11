import React, {Component} from 'react';
import Item from "../components/Items"

class Inventory extends Component {

  render() {
    return (  
      <table className = "table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Vendor</th>
            <th scope="col">Date-Received</th>
            <th scope="col">PO#</th>
            <th scope="col">Material</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.inventory.map((item)=>(
            <Item item={item}/>
          ))}
        </tbody>
      </table>
    );
  }
}
export default Inventory;