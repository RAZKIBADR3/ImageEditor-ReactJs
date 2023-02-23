import React , {useEffect, useState} from "react";
import axios from "axios";
import ImageEditor from "./Component/ImageEditor";
import './Css/style.css';

export default function App(){
    const [items,setItems] = useState(null)

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res=>{
            const T = res.data.products.slice(0,8)
            T.forEach(e=>{
                e['brightness'] = 10;
                e['contrast'] = 10;
                e['opacity'] = 10;
                e['saturate'] = 10;
            });
            setItems(T)
        })
        .catch(err=>console.log('error :' , err.message))
    },[])
    const result = 
        items===null
        ?<div className="loading d-flex align-items-center justify-content-center">Loading...</div>
        :<ImageEditor items={items}/>
    
    return(
        result
    )
}