import React from "react";
import {ReactComponent as RightArrow} from "../../../../assets/admin/rightArrow.svg"
import {ReactComponent as LeftArrow} from "../../../../assets/admin/leftArrow.svg"
import style from "./PaginationControls.module.css"

const PaginationControl = ({left=false, ...props}) => {
  const icon = left ? <LeftArrow /> : <RightArrow />
  
  return <button className={style.button} {...props}>{icon}</button>
}

export default PaginationControl