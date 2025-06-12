import React from 'react'
import './CategoryBox.css'



export default function CategoryBox({ title , children }) {
    return (
        <>
            <div className="box">
                <div>
                    {children}
                </div>
                <div className="nameBox">
                    <span>{title}</span>
                </div>
            </div>
        </>
    )
}
