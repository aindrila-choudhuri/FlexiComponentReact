const React = require("react");
import Flexi from "./Flexi";

//parent component of Flexi component which passes the flexiConfig object depending on which Flexi component creates the UI dynamically
export default class FlexiCaller extends React.Component {
    constructor(props) {
        super(props);

        this.flexiConfig = {
            items: [
                {
                    name: "person_name",
                    label: "Person's name",
                    type: "TextField",
                    subitems: [
                        {
                            name: "person_name_firstChild",
                            label: "First child's name",
                            type: "TextField",
                            subitems: [
                                {
                                    name: "person_name_secondChild",
                                    label: "Second child's name",
                                    type: "TextField"
                                }
                            ]
                        }
                    ]
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

    //This method is called on sumission of the child Flexi component
    //It takes one parameter - value(object containing the user input values)
    onFlexiSubmit(value) {
        console.log("User input values from Flexi component", value);
    }

    //The component render method
    render() {
        return (
            <Flexi onSubmit={this.onFlexiSubmit} config={this.flexiConfig} />
        );
    }
}

