import React , { memo } from "react"

function Header(){
    return(
        <header className='border p-2 d-flex justify-content-between align-items-center'>
            <h1 className="logo col-3 text-center">imageEditor</h1>
            <i title='profile' className="fa-solid fa-user h1 col-2 text-center"></i>
        </header>
    )
}
export default memo(Header)