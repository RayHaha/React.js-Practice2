import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    {/* we use the getCurrentPosition function of the geolocation API to get the physical position
    we have to pass in two separate function callbacks to get a response.
    The first argument is going to be a function callback that gets called when successfully getting the user's location.
    The second argument is going to be a failure callback */}
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );

    return <div>Hi there!</div>;
}

ReactDOM.render(<App />, document.querySelector('#root'));