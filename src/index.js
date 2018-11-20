import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// refactor the function component to class component
// because that .getCurrentPosition cost a lot of time
// it'll callback while getting the location
// but the following code will run first. In this case, the return will run first
// then we can't use the result of location in the return
/*
const App = () => {
    // we use the getCurrentPosition function of the geolocation API to get the physical position
    // we have to pass in two separate function callbacks to get a response.
    // The first argument is going to be a function callback that gets called when successfully getting the user's location.
    // The second argument is going to be a failure callback 
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
    // constructor function is going to be called automatically and instantly before anything else
    // so it's a very good location for us to initialize our state
    // constructor(props){
    //     // it's required in constructor , you have to call super first
    //     // to make sure that the parent(React.Component) constructor function get called
    //     super(props);
    //     // state must be initialized when a component is created
    //     // we initialized our state object by creating a javascript object, lat for lattitude
    //     // this is the only time we do direct assignment to this.state
    //     this.state = { lat: null, errorMessage: ''};
    // }
    // the other way to initialize State,
    // it'll do the exactly same thing after the compile of babel
    state = { lat: null, errorMessage: ''};

    // it's a part of lifecycle method
    componentDidMount(){
        // the render() method will be called very frequently
        // we don't want to use the getCurrentPosition function so many times like this
        // so we replace the method into constructor (x)
        // now we replace the method into componentDidMount method
        // we use constructor to do one-time setup, componentDidMount to load data
        // in this way, it's easier to recognize what the code is going to do
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // use the setState function to update the state
                // state can only be updated using the function 'setState'
                this.setState({ lat: position.coords.latitude});
            },
            (err) => {
                // use setState to handle the error message
                this.setState({ errorMessage: err.message});
            }
            // the same as 
            // position => this.setState({ lat: position.coords.latitude}),
            // err => this.setState({ errorMessage: err.message})
        );
    }

    // React says we have to define render in every component!
    render(){
        // use if statement to handle conditional rendering content
        // we can use if else too
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />;
        }

        // use Spinner.js here
        return <Spinner message="Please accept location request" />;        
    };
}


ReactDOM.render(<App />, document.querySelector('#root'));