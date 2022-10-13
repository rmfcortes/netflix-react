import React from 'react';

class HelloWorld extends React.Component {
    helloElement = React.createElement('p', {style: { color: 'white' } }, 'Hello world');
    render() { return this.helloElement }
}

export default HelloWorld;