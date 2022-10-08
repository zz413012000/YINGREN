import { connect } from "react-redux";
import Navbar from "../components/Navbar";
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
const NavbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
export default NavbarContainer