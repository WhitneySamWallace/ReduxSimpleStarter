//When the user types something in, a search is completed

//Class-based component

import React, { Component } from 'react';

class SearchBar extends Component {

    // Every class must have a render function that returns some JSX
    render() {
        return <input onchange={event => console.log(event.target.value)} /> //on + name of event = { reference to the event handler }
    }
}

export default SearchBar;