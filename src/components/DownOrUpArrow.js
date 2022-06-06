import React, { Fragment } from "react";
export default function DownOrUpArrow({downOrUp}) {
    return(
        <Fragment>
            {downOrUp 
                ? <svg style={{marginLeft: '16px', marginTop: '2px'}} xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 10 6" fill="none"><path d="M5 3.81846L8.88906 0L10 1.09077L5 6L0 1.09077L1.11094 0L5 3.81846Z" fill="#1C2C2E"></path></svg>
                : <svg style={{marginLeft: '16px', marginTop: '2px', transform: 'rotate(180deg)'}}  xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 10 6" fill="none"><path d="M5 3.81846L8.88906 0L10 1.09077L5 6L0 1.09077L1.11094 0L5 3.81846Z" fill="#1C2C2E"></path></svg>
            }
        </Fragment>
    )
}