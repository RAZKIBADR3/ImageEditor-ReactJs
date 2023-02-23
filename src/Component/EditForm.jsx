import React, { useState } from 'react'

export default function EditForm({dispatch,obj}){
    const [brightness,setBrightness] = useState(obj.brightness)
    const [contrast,setContrast] = useState(obj.contrast)
    const [opacity,setOpacity] = useState(obj.opacity)
    const [saturate,setSaturate] = useState(obj.saturate)
    
    
    const changeFilter=(type,val)=>{
        if(type==='brightness'){
            setBrightness(val)
        }else if(type==='contrast'){
            setContrast(val)
        }else if(type==='opacity'){
            setOpacity(val)
        }else if(type==='saturate'){
            setSaturate(val)
        }else{
            console.log('error');
        }
    }

    const editItem=()=>{
        dispatch({type:'editForm',payload:{val:0,obj:obj,data:{brightness:brightness,contrast:contrast,opacity:opacity,saturate:saturate}}})
    }
    return (
        <div className='editFormP'>
            <div style={{width:'800px'}} className="editForm border p-4 col-4 bg-light d-flex flex-column align-items-center justify-content-evenly">
                <h1 className='col-12 px-4 my-2'>Edit Picture</h1>
                <div className='d-flex col-12'>
                    <div className='leftSide col-4 p-2 border d-flex flex-column align-items-center justify-content-between'>
                        <img style={{width:'100%',height:'26vh',filter:`contrast(${contrast*10}%) brightness(${brightness*10}%) opacity(${opacity*10}%) saturate(${saturate*10}%)`}} src={obj.images[0]} alt="" />
                        <p className='m-0'>{obj.title}</p>
                    </div>
                    <div className="rightSide col-8 p-2 border">
                        {['brightness','contrast','opacity','saturate'].map((e,i)=>
                            <div key={i} className='my-2'>
                                <div className="d-flex justify-content-between">
                                    <label>{e}</label>
                                    <span>{`${
                                        (e==='brightness'
                                            ?brightness
                                            :(e==='contrast'?contrast:
                                                (e==='opacity'?opacity:saturate)
                                            )
                                        )*10
                                    }%`}</span>
                                </div>
                                <input onChange={(event)=>changeFilter(e,event.target.value)} defaultValue={obj[e]} type='range' min='0' max={e==='opacity'?'10':'20'} step='0.5' className="form-range" />
                            </div>
                        )}
                    </div>
                </div>
                <button onClick={()=>editItem()} className='btn btn-success col-3 p-2 my-3'>Edit</button>
            </div>
        </div>
    )
}