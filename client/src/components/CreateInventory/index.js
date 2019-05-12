import React, {Component} from 'react';

class Create extends Component {

  render() {
    console.log(this.props.create);
    return (
      <form>
        Vendor 
        <input
        type="text"
        className="form-control"
        placeholder="Input Vendor name..."
        id="vendor"
        name="vendor"
        value={this.props.create.vendor}
        onChange={this.props.handleInputOnChange}>
        </input>
        Date-Received 
        <input
        type="text"
        className="form-control"
        placeholder="Input Date..."
        id="date"
        name="date"
        value={this.props.create.date}
        onChange={this.props.handleInputOnChange}>
        </input>
        PO# 
        <input
        type="text"
        className="form-control"
        placeholder="Input PO#..."
        id="po"
        name="po"
        value={this.props.create.po}
        onChange={this.props.handleInputOnChange}>
        </input>
        Material 
        <input
        type="text"
        className="form-control"
        placeholder="Input Material..."
        id="material"
        name="material"
        value={this.props.create.material}
        onChange={this.props.handleInputOnChange}>
        </input>
        Quantity 
        <input
        type="text"
        className="form-control"
        placeholder="Input Quantity..."
        id="quantity"
        name="quantity"
        value={this.props.create.value}
        onChange={this.props.handleInputOnChange}>
        </input>
        <button onClick={this.props.onSubmit}>Save</button>
      </form>
    );
  }
}
export default Create;
