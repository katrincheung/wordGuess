import React from 'react'

const MyInput = ({ value, onKeyUp, children }) => (
    <div>
        <label>{children}</label>
        <input value={value} onChange={onKeyUp}/>
    </div>
)

export default MyInput
