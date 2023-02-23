import React , { useState , useRef } from 'react'

export default function AddForm({dispatch}) {
    const [img,setImg] = useState(null)
    const title = useRef('')

    const createUrl=(val)=>{
        let url = URL.createObjectURL(val.files[0])
        setImg(url)
    }
    const addItem=()=>{
        dispatch(
            {type:'add',payload:{e:
                {...{title:title.current,images:[img]}}
            }}
        )
        dispatch({type:'addForm',payload:{val:0,obj:{}}})
    }
    return (
        <div className='addFormP'>
            <div className="addForm border p-4 col-4 bg-light d-flex flex-column align-items-center justify-content-evenly">
                <h1 className='col-12 px-4 my-2'>Add Picture</h1>
                <div className="form-floating col-11 my-2">
                    <input type="text" onChange={(event)=>{title.current=event.target.value}} className="form-control" placeholder='title'/>
                    <label>title</label>
                </div>
                <div className="my-2 col-11">
                    <input onChange={(event)=>createUrl(event.target)} className="form-control" type="file" id="formFile" />
                </div>
                <img style={{width:'100%',height:'30vh'}} src={(img!==null?img:'')} alt="" />
                <button onClick={()=>addItem()} className='btn btn-success col-6 p-2 my-2'>Add</button>
            </div>
        </div>
    )
}