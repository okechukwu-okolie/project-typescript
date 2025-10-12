// import React from 'react'
import type { FC } from "react"
import type { Info } from "./types"

const UserInfo:FC<Info> = ({id,name,email}) => {
  return (
    <div style={{border:'1px solid grey', padding:'9px', display:'inline-block'}}>
        <h2>{name}</h2>
        <h4>{id}</h4>
        <h5>{email}</h5>
    </div>
  )
}

export default UserInfo