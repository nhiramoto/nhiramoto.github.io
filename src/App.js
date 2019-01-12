import React, { Component } from 'react';
import './App.sass';
import About from './components/About/About';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <About />
            </div>
        );
    }
}

export default App;
