import { createStore } from "redux";

const reducerfn=(state={counter: 0},action)=>{

    //Reducer functions must be 
    // Synchronous and we should not not mutate the original state

    if(action.type==="INC"){
        return {counter: state.counter+1};
    }
    if(action.type==="DCR"){
        return {counter: state.counter-1};
    }
    if(action.type==="ADD"){
        return {counter: state.counter+action.payload};
    }
    if(action.type==="SUB"){
        return {counter: state.counter-action.payload};
    }
    if(action.type==="RESET"){
        return {counter: action.payload};
    }
    

    return state;
};

const store=createStore(reducerfn)
export default store;