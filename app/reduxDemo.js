import React, { Component } from 'react'
import { createStore } from 'redux'
import { create } from 'domain';
// import console = require('console');

export default class reduxDemo extends Component {
    render(){
        // Step 2 : reducer : state n action
        const reducer = function (state, action){
            if(action.type === "ATTACK"){
                return action.payload
            }
            return state
        }

        // Step 1 : store : reducer n state
        // peace is state atau state berbasis object
        const store = createStore(reducer, "peace")

        // Step 3 : Subscribe
        store.subscribe(()=>{
            console.log("store is now", store.getState())
        })

        // Step 4 : Dispatch
        store.dispatch({type: "ATTACK", payload})
    }

}