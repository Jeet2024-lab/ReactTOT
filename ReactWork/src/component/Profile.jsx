import React from 'react'
import './profile.css'

function Profile({data}) {
  return (
    <div className='jeet'>
{/* <h2>Profile:{data.id}</h2> */}
<img src={data.pic} alt="" height={100} width={100} />
<h3>Name:{data.name}</h3>
<h3>Age:{data.age}</h3>    
<h3>Branch:{data.branch}</h3>
<h3>College:{data.college}</h3>



    </div>
  )
}

export default Profile