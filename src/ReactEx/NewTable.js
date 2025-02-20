import React from "react";
import "./Table.css";

class TableOf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {TableOf: 1};
  }
  renderTableOf = () => {
    let i = 1;
    let array = [];
    while (i <= 11) {
      let index = i;
      // defining ui
      let ui = (
        <button
          className="cell-button"
          style={{ backgroundColor: "lightgray", fontSize: "bold" }}
          onClick={() => {
            this.buttonClicked(index);
          }}
        >
          {index}
        </button>
      );
      // adding ui to array
      array.push(ui);
      //   loop index
      i++;
    }
    return <div className="row">{array}</div>;
  };
  buttonClicked = (index) => {
    console.log("INDEX ==", index);
    this.setState({tableOf: index});
  };
  render() {
    return
        {this.renderTableOf()}
    }
}
export default TableOf;