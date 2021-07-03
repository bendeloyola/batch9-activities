import React, { useState } from 'react'
import { btnEditAdd }  from '../Styles'

const AddBudget = (props) => {
    const [value, setValue] = useState(0);

    return (
        <>
            <input
				required='required'
				type='number'
				min="0"
          		step="1"
				className='form-control mr-3'
				value={value && Math.max(0, value)}
				onChange={(event) => setValue(event.target.value)}
				
			/>
			<button
				type='button'
				className='btn'
                style={btnEditAdd}
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</button>
        </>
    )
}

export default AddBudget
