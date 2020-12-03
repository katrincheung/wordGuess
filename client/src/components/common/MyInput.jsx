import React from 'react'

const MyInput = ({ value, onClick, children }) => (
    <div>
        <label>{children}</label>
        <input value={value} onChange={onClick}/>
    </div>
)

export default MyInput
