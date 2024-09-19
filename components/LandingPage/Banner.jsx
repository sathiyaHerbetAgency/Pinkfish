/* eslint-disable */
export const Banner=({artistData})=>{
    const HeadingClass="text-white self-center text-left text-[24px] leading-[28px]  font-[Montserrat-Bold] uppercase";
    const DescriptionClass="text-white self-center text-left text-[13px] leading-[15px]  font-[Montserrat-Regular] ";
    return(
        <div className="flex flex-col bg-[#710CF6] max-w-[100vw] py-6">
            <div className="flex w-[1500px] flex-col self-center">
                <div className="self-center flex items-center w-[70%] ">
                    <h2 className={HeadingClass}>{artistData.bannerHeading}</h2>
                    <div className="flex flex-col gap-2">
                    <h2 className={HeadingClass}>{artistData.bannerHeading2}</h2>
                    <p className={DescriptionClass}>{artistData.bannerText} </p>
                   </div>
                </div>
            </div>
        </div>
    )
}