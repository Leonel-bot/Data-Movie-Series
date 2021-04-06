import React, { useState } from 'react'
import './link_paginate.css'
import NavigateBefore from '@material-ui/icons/NavigateBeforeRounded';
import NavigateNext from '@material-ui/icons/NavigateNextRounded';

export default function LinkPaginate({ pageBefore, pageNext, page }) {

    return (
        <>
            <div className="link_paginate">
                <div className="before" onClick={pageBefore}>
                    <NavigateBefore />
                </div>
                <div className="link_pages">
                    <ul>
                        <li>{page}</li>
                    </ul>
                </div>
                <div className="next" onClick={pageNext}>
                    <NavigateNext />
                </div>
            </div>
        </>
    )
}