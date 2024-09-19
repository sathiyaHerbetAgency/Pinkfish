/* eslint-disable */
export const HeroTitle=()=>{
    const titleStyle="text-white self-center text-center text-[13px]  font-[Montserrat-Bold] uppercase";
    return(
        <div className="flex flex-col gap-6">
        <img src="./Landing-Page/pinkfish_logo.png" className="self-center" alt="logo" />
        <div className="flex flex-col">
            <p className={titleStyle}>31st december 2024 • NEW YEAR’S EVE</p>
            <p className={titleStyle}>SURF BEACH at SUNWAY LAGOON</p>
        </div>
    </div>
    );
};

  
