import React, {Component} from 'react';

class Item extends Component {

  render() {
    console.log(this.props.item);
    return (
      <tr>
      <th scope="row"> { this.props.item.id }</th>
      <td>{ this.props.item.vendor }</td>
      <td>{ this.props.item.date_received }</td>
      <td>{ this.props.item.PO }</td>
      <td>{ this.props.item.material }</td>
      <td>{ this.props.item.quantity }</td>
    </tr>
    );
  }
}
export default Item;
