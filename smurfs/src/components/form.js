import React, { useState } from 'react'
import { makingSmurf } from '../actions'
import { connect } from 'react-redux'


const Form = (props) => {

    const formValues = props.smurf
    const [form, setForm] = useState(formValues)

    const submit = e => {
        props.makingSmurf(form)
    }
    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <div>
            <form onSubmit={submit}>
                <input
                    type='text'
                    value={form.name}
                    onChange={onChange}
                    name='name'
                    placeholder='Name'>
                </input>
                <input
                    type='text'
                    value={form.age}
                    name='age'
                    onChange={onChange}
                    placeholder='Age'>
                </input>
                <input
                    type='text'
                    value={form.height}
                    name='height'
                    onChange={onChange}
                    placeholder='Height'>
                </input>
                <button>SUBMIT</button>
            </form>
        </div>

    )

}
const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        smurf: state.smurf,
        error: state.errror
    }
}
export default connect(mapStateToProps, { makingSmurf })(Form) 
