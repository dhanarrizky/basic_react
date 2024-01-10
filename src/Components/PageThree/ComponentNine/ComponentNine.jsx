import React, { Component } from 'react'
import './ComponentNine.css'

class ComponentNine extends Component {
    constructor() {
        super()
        this.state = {
            counting:0
        }
    }

    increment() {
        this.setState({
            counting: this.state.counting + 1
        })

        // this.setState((prevState, props) => ({
        //     counting: prevState.counting + props.addValue
        // })) ======> we can do it too, just using what ever function we need

        console.log("counting : ", this.state.counting)
    }

    render() {
        return (
            <div className="com-nine">
                <div>
                    <h1>Count: {this.state.counting}</h1>
                    <button onClick={() => this.increment()}>Increment</button>
                </div>
            </div>
        )
    }
}

export default ComponentNine;