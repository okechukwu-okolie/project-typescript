import  { useState } from 'react'
import type { Info } from './types'



const Profile = () => {
 const [profile, setProfile] =  useState<Info>({
    name:'',
    email:'',
    id:0,
  })


  const handleName = (name:string)=>{
    setProfile((prev)=>({...prev , name}))
  }
   const handleEmail = (email:string)=>{
    setProfile((prev)=>({...prev , email}))
  }
   const handleId = (id:number)=>{
    setProfile((prev)=>({...prev , id :Number(id)}))
  }
  return (
    <div>
      <input type="text" placeholder='input name...' value={profile.name} onChange={e=>handleName(e.target.value)} />

      <input type="email" placeholder='input email...' value={profile.email} onChange={(e)=>handleEmail(e.target.value)} />

      <input type="number" placeholder='input id...' value={profile.id} onChange={(e)=>handleId(e.target.value)} />
 
      <div>
        <h3>user profile</h3>
        <h6>{profile.name}</h6>
        <h6>{profile.email}</h6>
        <h6>{profile.id}</h6>
      </div>

    </div>
  )
}

export default Profile