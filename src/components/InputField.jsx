import React from 'react';

class InputField extends React.Component {
  render() {
    return <div className='InputField'>
              <input type={ this.props.type } name={ this.props.name } placeholder={ this.props.placeholder } required autoComplete='false'/>
              <label htmlFor={ this.props.name } ></label>
           </div>
  }
}

export default InputField;
