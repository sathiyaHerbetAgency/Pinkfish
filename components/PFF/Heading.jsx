
/* eslint-disable */

const Heading=({text,page})=>{
return(
    <div className="flex md:gap-8 justify-center items-center py-11 px-11 gap-3 ">
        {page==="PFF"?
        <svg width="63" height="49" viewBox="0 0 63 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_39_317)">
<path d="M46.9653 48.0064L19.4256 6.25122L6.48499e-05 49L46.9653 48.0064Z" fill="white"/>
<path d="M63 26.4995L45.5237 0L33.1954 27.1288L63 26.4995Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_39_317">
<rect width="63" height="49" fill="white" transform="matrix(-1 0 0 1 63 0)"/>
</clipPath>
</defs>
</svg>:
<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.3587 26.6022L41.8617 33.6556C44.2677 35.6519 44.4992 39.2608 42.3688 41.548C40.2294 43.8458 36.593 43.858 34.4368 41.5754L26.8748 33.5718L25.0216 44.49C24.4993 47.5659 21.4934 49.5653 18.4555 48.8572C15.4176 48.1491 13.604 45.0275 14.4948 42.0383L17.656 31.4247L7.33632 35.2636C4.39283 36.3585 1.13718 34.7398 0.232663 31.7338C-0.668808 28.7401 1.13413 25.6048 4.17508 24.8784L14.9196 22.308L6.40287 15.2439C4.00605 13.2567 3.78221 9.65999 5.91406 7.39108C8.04288 5.12522 11.6411 5.11913 13.776 7.3789L21.3807 15.4282L23.2339 4.51003C23.7562 1.43407 26.7621 -0.565312 29.8 0.142769C32.8379 0.85085 34.6515 3.9725 33.7607 6.96167L30.5994 17.5753L40.9785 13.7151C43.8931 12.6309 47.1183 14.2252 48.0259 17.1992C48.9349 20.1761 47.1457 23.3039 44.1169 24.0287L33.3556 26.6022H33.3587Z" fill="white"/>
</svg>
}
<h1 className="text-white font-bold font-[Integral] md:text-[36px] text-[28px] uppercase text-center">{text}</h1>
{page==="PFF"?
<svg width="63" height="49" viewBox="0 0 63 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_39_322)">
<path d="M16.0347 48.0064L43.5744 6.25122L62.9999 49L16.0347 48.0064Z" fill="white"/>
<path d="M0 26.4995L17.4763 0L29.8046 27.1288L0 26.4995Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_39_322">
<rect width="63" height="49" fill="white"/>
</clipPath>
</defs>
</svg>:
<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.3587 26.6022L41.8617 33.6556C44.2677 35.6519 44.4992 39.2608 42.3688 41.548C40.2294 43.8458 36.593 43.858 34.4368 41.5754L26.8748 33.5718L25.0216 44.49C24.4993 47.5659 21.4934 49.5653 18.4555 48.8572C15.4176 48.1491 13.604 45.0275 14.4948 42.0383L17.656 31.4247L7.33632 35.2636C4.39283 36.3585 1.13718 34.7398 0.232663 31.7338C-0.668808 28.7401 1.13413 25.6048 4.17508 24.8784L14.9196 22.308L6.40287 15.2439C4.00605 13.2567 3.78221 9.65999 5.91406 7.39108C8.04288 5.12522 11.6411 5.11913 13.776 7.3789L21.3807 15.4282L23.2339 4.51003C23.7562 1.43407 26.7621 -0.565312 29.8 0.142769C32.8379 0.85085 34.6515 3.9725 33.7607 6.96167L30.5994 17.5753L40.9785 13.7151C43.8931 12.6309 47.1183 14.2252 48.0259 17.1992C48.9349 20.1761 47.1457 23.3039 44.1169 24.0287L33.3556 26.6022H33.3587Z" fill="white"/>
</svg>
}

    </div>
)
}

export default Heading;