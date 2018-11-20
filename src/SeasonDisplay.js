import React from 'react';

// build a new function to determine the season
const getSeason = (lat, month) => {
    // the value of getMonth() begin from 0, so 0 is Jan. and 11 is Dec.
    // that means 3~8 is Apr. to Sep.
    if(month>2 && month<9){
        // evaluate if "lat > 0", true return summer, false return winter
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }
}


const SeasonDisplay = (props) => {
    
    // pass the lat and month to the getSeason function
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    // by this way, we can use less logic computation in JSX
    // it's the same as putting season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'
    // in the div tag

    // we are going to use th icon in semantic-ui.com
    const icon = season === 'winter' ? 'snowflake' : 'sun';

    // ternary expression in JSX
    return (
        <div>
            {/** use the icon in semantic-ui.com by i tag */}
            {/** and it's ES2015 way to get the value whatever the icon is and throw it into the string */}
            <i className={`${icon} icon`}/>
            <h1>{text}</h1>
            <i className={`${icon} icon`}/>
        </div>
    );
}

export default SeasonDisplay;