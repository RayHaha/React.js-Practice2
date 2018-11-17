import React from 'react';
import ReactDOM from 'react-dom';

// refactor the function component to class component
// because that .getCurrentPosition cost a lot of time
// it'll callback while getting the location
// but the following code will run first. In this case, the return will run first
// then we can't use the result of location in the return
/*
const App = () => {
    we use the getCurrentPosition function of the geolocation API to get the physical position
    we have to pass in two separate function callbacks to get a response.
    The first argument is going to be a function callback that gets called when successfully getting the user's location.
    The second argument is going to be a failure callback 
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );
    return <div>Hi there!</div>;
}
*/

/*
    react expects that our class based component has many other methods attached to it.
    However, we don't need to implement these method by ourselves.
    We borrow all these methods from React.Component, so we need to extend to React.Component here.
    We are subclassing React.Component
*/
class App extends React.Component{
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div>Latitude: </div>;
    };
}


ReactDOM.render(<App />, document.querySelector('#root'));