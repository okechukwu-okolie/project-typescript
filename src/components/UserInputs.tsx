import type { FC } from "react";

type CompanyInfo = {
  id:number;
  position:string;
  jobStatus:boolean;
}

const NewComponent:FC<CompanyInfo> = ({id,position,jobStatus})=>{

  return(
    <div>
      <h5>id:{id}</h5>
      <h4>position:{position}</h4>
      <p>Employment status:{jobStatus ? "employed":"unemployed"}</p>
    </div>

  )
}

type UserInfo = {
  name:string;
  age:number;
  isMarried:boolean;
}
const UserInputs = ({name,age,isMarried}:UserInfo) => {
  return (
    <div>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Married:{isMarried ? "Yes":"No"}</p>

      <NewComponent id={1} position='CEO' jobStatus = {true}/>
    </div>
  )
}

export default UserInputs