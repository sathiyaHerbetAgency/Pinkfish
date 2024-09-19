/* eslint-disable */
export const HeroHeading=({artistData})=>{
    const HeadingClass="text-white self-center text-center text-[48px]  font-[Montserrat-Bold] uppercase";
    const DescriptionClass="text-white self-center text-center text-[16px]  font-[Montserrat-Regular] w-[500px]";
    return(
        <div className="flex flex-col mt-3">
            <div className="flex flex-col">
                <h1 className={HeadingClass}>{artistData.heading}<span className="text-[#90FF7E]">{artistData.spanText}</span></h1>
                <p className={DescriptionClass}>{artistData.text}</p>
            </div>
            <img src={artistData.imageUrl} alt="lineup" />
        </div>
    )
}