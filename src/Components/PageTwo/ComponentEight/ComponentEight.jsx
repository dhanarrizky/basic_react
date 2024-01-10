import React, { Component } from "react";
import './ComponentEight.css';

class ComponentEight extends Component {
    constructor() {
        super()
        this.state = {
            message: 'welcome to my class extends',
            btnText: 'Subscribe'
        }
    }
    
    changeMessage() {
        if(this.state.btnText === 'Subscribe'){
            this.setState({
                message: 'thanks you for subscribeing',
                btnText: 'Subscribed'
            })
        } else {
            this.setState({
                message: 'welcome to my class extends',
                btnText: 'Subscribe'
            })
        }
    }

    render() {
        return (
            <div className="con-eight">
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>{this.state.btnText}</button>
            </div>
        )
    }
}

export default ComponentEight