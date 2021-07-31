import React from 'react'

function AddTimerForm(props) {
        return (
            <form>
                <label>Exercise</label>
                <input type="text" name="exercise" value={props.formValues.exercise} onChange={props.onChangeValue}/>
                <label>Seconds</label>
                <input type="number" name="seconds"/>
                <button type="submit">+</button>
            </form>
        )
}

export default AddTimerForm