const React = require("react");
import Flexi from "./Flexi";

export default class FlexiCaller extends React.Component {
  constructor(props) {
    super(props);
    
    this.flexiConfig = {
        items: [
            {
                name: "person_name",
                label: "Person's name",
                type: "TextField"
            },
            {
                name: "states",
                label: "Person's state",
                type: "Dropdown",
                values: [
                    "Maharashtra",
                    "Kerala",
                    "TamilNadu"
                ]
            }
        ]
    };

    this.onFlexiSubmit = this.onFlexiSubmit.bind(this);
  }

  onFlexiSubmit(value) {
        console.log("inside on flexi submit", value);
    }

  render() {
    return (
      <Flexi onSubmit={this.onFlexiSubmit} config={this.flexiConfig}/>
    );
  }
}

