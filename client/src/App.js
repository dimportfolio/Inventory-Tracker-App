import React, {Component} from 'react';
import Inventory from "./pages/Inventory"

class App extends Component {
  state = {
    inventory: [
      {
        id: 1,
        vendor: "vendor llc",
        date_received: "Jan 30 2019",
        PO: "#10001",
        material: "wood",
        quantity: 100
      },
      {
        id: 2,
        vendor: "vendor llc",
        date_received: "Feb 08 2019",
        PO: "#10002",
        material: "carpet",
        quantity: 100
      },
      {
        id: 3,
        vendor: "vendor llc",
        date_received: "Feb 16 2019",
        PO: "#10003",
        material: "tile",
        quantity: 100
      },
      {
        id: 4,
        vendor: "vendor llc",
        date_received: "Feb 22 2019",
        PO: "#10004",
        material: "metal",
        quantity: 100
      }

    ]
  }

  render() {
    return (
      <div className="App">
        <h1>app</h1>
          <Inventory inventory={this.state.inventory}/>
      </div>
    );
  }
}
export default App;
