/* eslint-disable */
import React from 'react'

const FollowUs = () => {
    const imgList=["./Landing-Page/Socials/insta.png",
        "./Landing-Page/Socials/yt.png",
        "./Landing-Page/Socials/tiktok.png",
        "./Landing-Page/Socials/fb.png",
     ] 
     const links=[
        "https://www.instagram.com/pinkfishfestival/",
        "https://www.youtube.com/@Pinkfishfestival",
        "https://www.tiktok.com/@pinkfishfestival",
        "https://www.instagram.com/pinkfishfestival/",

     ]
     const titleClass="text-white self-center text-center text-[28px] leading-[32px]  font-[Babas] uppercase"
  return (
    <div className="flex flex-col my-12">
        <div className="flex gap-6 items-center self-center ">
            <div className="flex flex-col gap-0">
                <h3 className={titleClass}>Follow Us On</h3>
                <h3 className={titleClass}>Our Socials</h3>
            </div>
            <div className="flex gap-3">
                {imgList.map((each,index)=>(
                    <a href={links[index]} target="_blank">
                        <img src={each} className="w-[100px]" alt={"img"+index} />
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FollowUs