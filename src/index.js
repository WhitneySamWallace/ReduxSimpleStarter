//Create a new component.  This component should produce some HTML

//Take this component's generated HTML and put it on the page (in the DOM)

import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAirgwYDcXQYz3LBBp_TQnx6Qv1KvrYrJE';

//Functional component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));