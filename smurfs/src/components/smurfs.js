import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { findingSmurf } from '../actions'
import Smurf from "./smurf"

const SmurfList = (props) => {
    useEffect(() => {
        props.findingSmurf();
    }, []);

    useEffect(() => {
        props.findingSmurf();

    }, [props.isPosting])

    return (
        <div>
            <h2>Smurf List</h2>
            <p>{props.error}</p>
            {props.smurfs.map((smurf) => (
                <div>
                    <Smurf smurf={smurf}></Smurf>
                </div>
            ))}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        error: state.error,
        isPosting: state.isPosting
    }
}
export default connect(mapStateToProps, { findingSmurf })(SmurfList);