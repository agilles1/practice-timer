import React from 'react'

function AddTimerForm(props) {
        return (
            <form onSubmit={props.onSubmitValue}>
                <label>Exercise</label>
                <input type="text" name="exercise" value={props.formValues.exercise} onChange={props.onChangeValue}/>
                <label>Seconds</label>
                <input type="number" value={props.formValues.start} name="start" onChange={props.onChangeValue}/>
                <button type="submit">+</button>
            </form>
        )
}

export default AddTimerForm