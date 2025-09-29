import React,{useState} from 'react'

type UserInfo = {
    name:string;
    password:string;
    email:string;
}

const UserSignUp = () => {
    const [user, setUser] = useState<UserInfo[]>([])
    const [userDetail, setUserDetail] = useState<>({
        name,
        password,
        email,
    })
  return (
    <div>
        <form action=""></form>
      
    </div>
  )
}

export default UserSignUp
