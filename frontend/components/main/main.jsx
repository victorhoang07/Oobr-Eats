import React from "react";
import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";

const Main = (props) => {

    return (
        <div>
            <button onClick={props.logout}>logout</button>
        </div>

    )
}


const mDTP = dispatch => ({
    logout: () => dispatch(logout())
    })


export default connect(null, mDTP)(Main)
