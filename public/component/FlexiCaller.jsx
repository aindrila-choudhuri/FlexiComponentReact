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

    onFlexiSubmit(value) {
        console.log("User input values from Flexi component", value);
    }

    render() {
        return (
            <Flexi onSubmit={this.onFlexiSubmit} config={this.flexiConfig} />
        );
    }
}

