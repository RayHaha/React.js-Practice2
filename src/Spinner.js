import React from 'react';

const Spinner = (props) => {
    return (
        <div className='ui active dimmer'>
            <div className='ui big text loader'>
                {props.message}
            </div>
        </div>
    );
}
// set the default of props
// it's something similar to {props.message || 'Loading...'}
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;