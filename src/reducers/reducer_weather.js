import { FETCH_WEATHER } from '../actions/index.js';


function weatherReducer(state = [], action) {

    // the action's payload was suposed to contain a promise as that's how 
    // the action creator fetchWeather creates it ...

    // But the redux-promise middleware intercepts all actions before it touches any of the 
    // reducers (like all redux middlewares) and waits the promise out before it action passes on to 
    // a reducer

    // This prints the actual value of the promuse and not the promise
    // console.log(action.payload);
    
    
    // Changes to the state are performed here.
    // using a swtich case statement 
    switch(action.type) {
        case FETCH_WEATHER:
            return [action.payload.data,...state.slice(0,2)];
        default:
            return state
    } 
}

export default weatherReducer;