//When the user types something in, a search is completed

//Class-based component (only class-based components have state)

import React, { Component } from 'react';

class SearchBar extends Component {
    //This is how we initialize state in a class-based component
    //first and only function called automatically whenever a new instance is created
    constructor(props) { 
        super(props); 

        this.state = { term: ''};
    }

    // Every class must have a render function that returns some JSX
    render() {
        return <input onchange={event => console.log(event.target.value)} /> //on + name of event = { reference to the event handler }
    }
}

export default SearchBar;