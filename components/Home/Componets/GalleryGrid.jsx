/* eslint-disable */

import React from 'react'

const GalleryGrid = ({check}) => {
  return (
    <div>
        {check==="pf"&&
        <div className="flex flex-col gap-3">
            <div className="flex gap-3">
                <img src="./Home/Gallery/PF/pf_1.png" className="w-[35%] h-[250px] " alt="pf-1" />
                <img src="./Home/Gallery/PF/pf_2.png" className="w-[20%]  h-[250px] " alt="pf-1" />
                <img src="./Home/Gallery/PF/pf_3.png" className="w-[43%]  h-[250px]  "  alt="pf-1" />

            </div>
            <div className="flex gap-3">
                <img src="./Home/Gallery/PF/pf_4.png" className="min-w-[25%]   h-[200px]" alt="pf-1" />
                <img src="./Home/Gallery/PF/pf_5.png" className="min-w-[25%]   h-[200px] " alt="pf-1" />
                <img src="./Home/Gallery/PF/pf_6.png" className="w-[50%]   h-[200px] "  alt="pf-1" />

            </div>
        </div>
}
{check==="pc"&&
        <div className="flex flex-col gap-3">
            <div className="flex gap-3">
                <img src="./Home/Gallery/PC/pc_1.png" className="w-[20%] h-[250px] " alt="pc-1" />
                <img src="./Home/Gallery/PC/pc_2.png" className="w-[40%]  h-[250px] " alt="pc-1" />
                <img src="./Home/Gallery/PC/pc_3.png" className="w-[40%]  h-[250px]  "  alt="pc-1" />

            </div>
            <div className="flex gap-3">
                <img src="./Home/Gallery/PC/pc_4.png" className="w-[32%]   h-[200px]" alt="pc-1" />
                <img src="./Home/Gallery/PC/pc_5.png" className="w-[32%]   h-[200px] " alt="pc-1" />
                <img src="./Home/Gallery/PC/pc_6.png" className="w-[36%]   h-[200px] "  alt="pc-1" />

            </div>
        </div>
}

{check==="pl"&&
        <div className="flex flex-col gap-3">
            <div className="flex gap-3">
                <img src="./Home/Gallery/PL/pl_1.png" className="w-[40%] h-[250px] " alt="pl-1" />
                <img src="./Home/Gallery/PL/pl_2.png" className="w-[20%]  h-[250px] " alt="pl-1" />
                <img src="./Home/Gallery/PL/pl_3.png" className="w-[40%]  h-[250px]  "  alt="pl-1" />

            </div>
            <div className="flex gap-3">
                <img src="./Home/Gallery/PL/pl_4.png" className="w-[25%]   h-[200px]" alt="pl-1" />
                <img src="./Home/Gallery/PL/pl_5.png" className="w-[25%]   h-[200px] " alt="pl-1" />
                <img src="./Home/Gallery/PL/pl_6.png" className="w-[50%]   h-[200px] "  alt="pl-1" />

            </div>
        </div>
}
    </div>
  )
}

export default GalleryGrid