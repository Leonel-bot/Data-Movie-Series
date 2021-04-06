import React, { useEffect, useState } from 'react'
import './filter.css'

export default function Filter({filterMediaType , filterTitle , value1 , value2 ,valueTxt1 , valueTxt2}) {


    return (
        <div className="filter_option">
            <div className="filter_title">
                <p>{filterTitle}</p>
            </div>
            <form action="" onChange={filterMediaType}>
                <label className="label_filter">
                    <input type="radio" name="option" id="option1" defaultChecked value={value1} />
                    <div>{valueTxt1}</div>
                </label>
                
                <label className="label_filter">
                    <input type="radio" name="option" id="option2"  value={value2} />
                    <div>{valueTxt2}</div>
                </label>
            </form>
        </div>
    )
}