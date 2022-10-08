import { connect } from "react-redux";
import Switch from "../components/Switch";
const mapStateToProps = state =>{
    return {
        SidebarOption:state.SidebarOption,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleSwitch(){
            dispatch({
                type:"UPDATE_SWITCH"
            })
        },
    }
}
const SwitchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Switch)
export default SwitchContainer