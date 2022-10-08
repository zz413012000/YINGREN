import {createStore} from "redux";

const initialstate = {
    SidebarOption:false
}
function reducer(state=initialstate,action){
    switch(action.type){
        case "UPDATE_SWITCH":
            return {SidebarOption:!state.SidebarOption}
        default:
            return state
    }
}
let store=createStore(reducer)
export default store