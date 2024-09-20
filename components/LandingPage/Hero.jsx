/* eslint-disable */
import React from 'react'
import { HeroTitle } from './HeroTitle';
import { HeroHeading } from './HeroHeading';
const Hero = ({artistData}) => {
  return (
    <div className="bg-hero-landing-page md:max-w-[100vw] flex flex-col">
        <div className="md:max-w-[1100px] self-center">
            <div className="flex flex-col">
                <div className="self-center flex flex-col gap-6">
                    <HeroTitle />
                    <HeroHeading artistData={artistData} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero