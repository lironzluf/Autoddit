import React from 'react';

export default class InputGroup extends React.Component {
    constructor() {
        super();
        this.state = {
            touched: false
        }
        this.inputBlur = this.inputBlur.bind(this);
    }

    inputBlur() {
        this.setState({
            touched: true
        });
    }

    render() {
        return (
            <div className="input-group">
                {this.state.touched && this.props.validate && this.props.validate.isLink && this.props.value.indexOf('http') === -1
                && <p className="error">{this.props.name} is not a valid URL</p> }
                {this.state.touched && this.props.validate && this.props.validate.minLength && this.props.value.length < this.props.validate.minLength
                && <p className="error">{this.props.name} should be more than {this.props.validate.minLength} characters</p> }
                <label>{this.props.name}</label>
                <input type="text" onBlur={this.inputBlur} onChange={this.props.onChange} value={this.props.value} required/>
            </div>
        )
    }
}