import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

class Counter extends Component {
    decrementOne = () => {
        this.props.decrement(1)
    }

    incrementOne = () => {
        this.props.increment(1)
    }

    render() {
        return (
            <div>
                <button onClick={this.decrementOne}>-</button>
                <p>{this.props.counter}</p>
                <button onClick={this.incrementOne}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter,
})

const mapDispatchToProps = {
    decrement,
    increment,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)