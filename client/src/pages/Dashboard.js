import React, {Component} from 'react';
import Inventory from "../components/Inventory";
import Create from "../components/CreateInventory";

class Dashboard extends Component {
  state = {
    inventory: [
      {
        vendor: "vendor llc",
        date_received: "Jan 30 2019",
        PO: "#10001",
        material: "wood",
        quantity: 100
      },
      {
        vendor: "vendor llc",
        date_received: "Feb 08 2019",
        PO: "#10002",
        material: "carpet",
        quantity: 100
      },
      {
        vendor: "vendor llc",
        date_received: "Feb 16 2019",
        PO: "#10003",
        material: "tile",
        quantity: 100
      },
      {
        vendor: "vendor llc",
        date_received: "Feb 22 2019",
        PO: "#10004",
        material: "metal",
        quantity: 100
      }

    ],
    create: {
      vendor: "",
      date_received: "",
      PO: "",
      material: "",
      quantity: ""
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.state.inventory.push(this.state.create);
  }

  handleInputOnChange = ({ target }) => {
    this.setState({ 
      create: {
        [target.name]: target.value }
      }
    )
  }

  render() {
    return (  
      <div>
        <Create  
        create={this.state.create}
        onSubmit={this.onSubmit}
        handleInputOnChange={this.handleInputOnChange}
        />
        <Inventory 
        inventory={this.state.inventory}
        />
      </div>
    );
  }
}

export default Dashboard;