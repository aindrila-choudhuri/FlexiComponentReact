const React = require("react");

//Flexi component which takes the config object from the parent component and depending on that it creates the dynamic UI
export default class Flexi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //This method handles the on change event for the input elements
  //It takes two parameters - Key(the element name which is to be set in the state), event (event object) 
  handleChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  //This method handles the on click event of the Submit button
  //It takes one parameter - event(the event object)
  handleSubmit(event) {
    this.props.onSubmit(this.state);
    event.preventDefault();
  }

  //This method builds the elements in the component based on the config passed in props
  //It takes one parameter - config(the config object)
  buildComponent(config) {
    let result = [];

    config.items.forEach((item, index) => {
      result = result.concat(this.buildChildComponent(item, index));
    })

    return result;
  }

  //This method is recursively called in case of recursive structure in the config object
  //It takes two parameters - item(the object for which the recursive structure to be made) idx(array index)
  buildChildComponent(item, idx) {
    let result = []
    let element = ''
    if (item.type === "TextField") {
      element = <div key={item.name+idx} style={sectionStyle}>{item.label}:
      <input 
          type="text"
          ref={item.name}
          style={inputStyle}
          onChange={(textBoxValue) => this.handleChange(item.name, textBoxValue)} />
      </div>;
      result.push(element);
    }
    if (item.type === "Dropdown") {
      const makeDropDown = () => {
        return item.values.map((val, index) => {
          return (
            <option key={index} value={val}>
              {val}
            </option>
          );
        });
      };
      element = <div style={sectionStyle} key={item.name+idx}>{item.label}:
      <select
          ref={item.name}
          onChange={(dropDownValue) => this.handleChange(item.name, dropDownValue)}>
            <option value="">
              Select state
            </option>
            {makeDropDown()}
        </select>
      </div>;
      result.push(element);
      };
    
    if (item.subitems && item.subitems.length) {
      item.subitems.forEach((subitem, index) => {
        result = result.concat(this.buildChildComponent(subitem, index));
      })
    }

    return result;
  }

  //The component render method
  render() {
    const elements = this.buildComponent(this.props.config);

    return (
      <div style={sectionStyle}>
        {elements}
        <div style={buttonStyle}>
          <button onClick={this.handleSubmit}>
            Submit
        </button>

        </div>
      </div>
    );
  }
}

const sectionStyle = {
  marginTop: 10,
  marginLeft: 38,
  marginRight: 38
}

const buttonStyle = {
  borderRadius: 4,
  marginTop: 10,
  marginLeft: 38,
  marginRight: 38
}

const inputStyle = {
  textAlign: 'left',
  fontSize: 15,
  fontWeight: 'normal',
  color: '#404040',
}

