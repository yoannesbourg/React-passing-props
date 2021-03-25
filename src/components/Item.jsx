import React, { useState } from 'react'

const Item = ({id, description, handleEdit}) => {
    const [isEdit, setIsEdit] = useState(false)
    const [text, setText] = useState(description)

    const edit = () => {
        setIsEdit(!isEdit)
    }

    const handleChange = e => {
        setText(e.target.value)
    }

    const update = () => {
        handleEdit(id, text)
        edit()
        console.log()
    }

    return(
        <div>
            {
                !isEdit? 
                <div className="item">
                    <li>{description}</li>
                    <button onClick={edit}>Edit</button>
                </div>
                : 
                <div>
                    <input value={text} onChange={handleChange} />
                    <button onClick={update}>Update</button>
                </div>       
           
            }
        </div>
        

    )
}

export default Item
