import React , { memo } from 'react'

function Control({dispatch}) {
    return (
        <div className="controlSection border col-2 d-flex flex-column align-items-center p-2">
            <p className='col-12 fw-semibold'>Control Section</p>
            <button onClick={()=>dispatch({type:'addForm',payload:{val:1}})} className="btn btn-outline-primary col-8">Add Picture</button>
        </div>
    )
}

export default memo(Control);