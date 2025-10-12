// import React from 'react'

import type { FC } from "react";

type Button = {
    label:string;
    disabled:boolean;
    onclick:()=>void;
}

const Button:FC<Button> = ({label,disabled,onclick}) => {
  return (
    <div>
        <button onClick={onclick} disabled={disabled}>{label}</button>
    </div>
  )
}

export default Button