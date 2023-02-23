import React , {useReducer } from 'react'
import AddForm from './AddForm'
import Control from './Control'
import EditForm from './EditForm'
import Header from './Header'
import Items from './Items'


export default function ImageEditor({items}) {
    const init_state = {items:items,addForm:0,editForm:0,obj:{}}
    const reducer =(state,action)=>{
        switch(action.type){
            case 'add':
                    const obj = action.payload.e
                    obj['brightness'] = 10
                    obj['contrast'] = 10
                    obj['opacity'] = 10
                    obj['saturate'] = 10
                return {...state,items:[...state.items,obj]}
            case 'delete':
                return {...state,items:state.items.filter(item=>item!==action.payload.e)}
            case 'edit':
                return {}
            case 'addForm':
                return {...state,addForm:action.payload.val}
            case 'editForm':
                    let T = state.items
                    if(action.payload.val===0){
                        const obj = action.payload.obj
                        let i = state.items.indexOf(action.payload.obj)
                        obj.brightness = action.payload.data.brightness
                        obj.contrast = action.payload.data.contrast
                        obj.opacity = action.payload.data.opacity
                        obj.saturate = action.payload.data.saturate
                        T.splice(i,1,{...obj})
                    }
                return {...state,
                    editForm:action.payload.val,
                    obj:action.payload.obj,
                    items:T
                }
            default:
                return {items:[]}
        }
    }
    const [state,dispatch] = useReducer(reducer,init_state)

    return (
        <div className='container'>
            <Header />
            <div className="body d-flex">
                <Control dispatch={dispatch}/>
                <Items items={state.items} dispatch={dispatch}/>
            </div>
            {state.addForm===1&&<AddForm dispatch={dispatch}/>}
            {state.editForm===1&&<EditForm dispatch={dispatch} obj={state.obj}/>}
        </div>
    )
}