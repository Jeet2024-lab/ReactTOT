import React from 'react'
import Profile from './Profile'

function Gallery() {
    const student=[{
        pic:"https://media.istockphoto.com/id/1152338619/photo/colorful-parrot-macaw-wing-tropical-bird-plumage-pattern-pantanal-brazil.jpg?s=1024x1024&w=is&k=20&c=C8W8suCqxebFGo6IWDJScqzyOWEJ5nsuDnPymDDl8o4=",
        
        name:"Ram",
        age:"20",
        branch:"IT",
        college:"ABES Enghhineering College"
    },{
        pic:"https://media.istockphoto.com/id/988196714/photo/beautiful-of-bird-feather.jpg?s=1024x1024&w=is&k=20&c=Z4qJ9_N2i5vz2I0UOudLHGavv8b8gCrT6JrC4x3YhTw=",
        
        name:"Amit",
        age:"25",
        branch:"CSE",
        college:"ABES-IT"
    },{
        pic:"https://media.istockphoto.com/id/988195948/photo/beautiful-of-bird-feather.jpg?s=1024x1024&w=is&k=20&c=vDjcOG_N1ct8V8F5KgaGj2tokSFnf1Tlu6ansao405Q=",
        
        name:"Ankita",
        age:"30",
        branch:"AIML",
        college:"AKG"
    },{
        pic:"https://media.istockphoto.com/id/987982486/photo/tricolor-parrot-wing.jpg?s=1024x1024&w=is&k=20&c=4DHaYsAmFrDgk-OW6G50xo7BSsFU4fUanXE-LiEPrlY=",
        
        name:"Raunak",
        age:"15",
        branch:"AI",
        college:"HITECH"
    }];
  return (
    <div>
        {/* <Profile id="1" name="Jitendra Kumar Chauahn" age="20" branch="CSE" college="ABES"/>
        <Profile id="2" name="Amit Chauhan" age="10" branch="CSE-DS" college="ABES-IT"/>
        <Profile id="3" name="Ankita Chauhan" age="30" branch="CSE-AIML" college="AKG"/> */}

        {/* <Profile data={student}/> */}

        {
            student.map((ele,index)=>(<Profile data={ele}/>))
        }
        
        </div>
  )
}

export default Gallery