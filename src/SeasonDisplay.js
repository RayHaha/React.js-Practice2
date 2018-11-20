// import SeasonDisplay.css
import './SeasonDisplay.css';

import React from 'react';

// use config object to make the code cleaner
const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",   // one way to use '
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it\'s chilly!',     // another way to use '
        iconName: 'snowflake'
    }
}


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
    // const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    // // by this way, we can use less logic computation in JSX
    // // it's the same as putting season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'
    // // in the div tag

    // // we are going to use the icon in semantic-ui.com
    // const icon = season === 'winter' ? 'snowflake' : 'sun';

    // then we are going to use the seasonConfig here
    const { text, iconName} = seasonConfig[season];

    return (
        // use the class name similar to the class/constant/function make it easier to apply CSS
        // season-display get the css properties
        <div className={`season-display ${season}`}>
            {/** use the icon in semantic-ui.com by i tag */}
            {/** and it's ES2015 way to get the value whatever the iconName is and throw it into the string */}
            {/** massive make the icon bigger */}
            {/** icon-left/right get the css properties */}
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    );
}

export default SeasonDisplay;