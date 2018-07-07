const React = require("react");

export default class Flexi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personName: '',
      stateName: ''
    };

    this.handleChangeTextBox = this.handleChangeTextBox.bind(this);
    this.handleChangeDropdown = this.handleChangeDropdown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTextBox(event) {
    this.setState({ personName: event.target.value });
  }

  handleChangeDropdown(event) {
    this.setState({ stateName: event.target.value });
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state);
    event.preventDefault();
  }

  render() {
    const elements = this.props.config.items.map((item, idx) => {
      return (item.type === "TextField") ?
        <div key= {idx} style={sectionStyle}>{item.label}: <input type="text" style = {inputStyle} value={this.state.personName} onChange={this.handleChangeTextBox} /></div>
        : (item.type === "Dropdown") ?
        <div key= {idx} style={sectionStyle}>{item.label}: <select value={this.state.stateName} onChange={this.handleChangeDropdown}>
            {
              item.values.map((val, index) =>
                <option key= {index} value={val}>{val}</option>
              )
            }
          </select></div>
          : null;
    });

    return (
      <form onSubmit={this.handleSubmit} style={sectionStyle}>
        
        {elements}
        
        <div style={buttonStyle}>
          <input type="submit" value="Submit" />
        </div>
      </form>
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

