import { connect } from "react-redux";
import Sidebar from "../components/Sidebar";
const mapStateToProps = state =>{
    return {
        SidebarOption:state.SidebarOption
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleSwitch(){
            dispatch({
                type:"UPDATE_SWITCH"
            })
        }
    }
}
const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
export default SidebarContainer