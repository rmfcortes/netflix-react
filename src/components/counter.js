import React from 'react';

class Counter extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    render() {
        return (<div style={ { color: 'white' } }>
            <p>{this.state.counter}</p>
            <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
            <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
        </div>
    )};
}

export default Counter;