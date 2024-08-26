import React from 'react'

const LineupImage = () => {
    const imageDetails=[
        {img:"./PFA/Lineup/lineup_1.png",
          name:'Billy Gillies'  
        },
        {img:"./PFA/Lineup/lineup_2.png",
            name:'Andrew Rayel'  
          },
          {img:"./PFA/Lineup/lineup_3.png",
            name:'giusppe ottaviani'  
          },
          {img:"./PFA/Lineup/lineup_4.png",
            name:'chukiess & Whackboi'  
          }
    ]
  return (
    <>
    {imageDetails.map(each=>(
    <div className="flex flex-col gap-2 items-center"> 
      <img src={each.img} classsName="object-contain self-center" alt="img_1"/>
      <h1 className="text-[28px] font-[Trim] text-white uppercase text-center self-center">{each.name}</h1>
      </div>
      ))}
      </>
  )
}

export default LineupImage