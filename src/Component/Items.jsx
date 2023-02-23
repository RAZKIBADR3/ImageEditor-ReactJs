import React, { memo } from 'react'

function Items({items,dispatch}) {
    return (
        <div className="items border col-10 d-flex flex-wrap justify-content-evenly p-2">
            {items.map((item,i)=>
                <div style={{width:'180px',height:'40vh'}} key={i} className="item my-2 col-4 border rounded d-flex flex-column align-items-center justify-content-between">
                    <img style={{height:'26vh',filter:`contrast(${item.contrast*10}%) brightness(${item.brightness*10}%) opacity(${item.opacity*10}%) saturate(${item.saturate*10}%)`}} src={item.images[0]} alt="" />
                    <p className='m-0 p-1'>{item.title}</p>
                    <div className='py-1 col-12 d-flex justify-content-center'>
                        <button onClick={()=>dispatch({type:'delete',payload:{e:item}})} className="btn btn-danger mx-1">Delete</button>
                        <button onClick={()=>dispatch({type:'editForm',payload:{val:1,obj:item}})} className="btn btn-success mx-1">Edit</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Items