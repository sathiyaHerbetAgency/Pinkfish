/* eslint-disable */
import React from 'react'


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  // Import all images from the 'public/images' directory
  const images = importAll(require.context('../../public/PFA/Lineup', false, /\.(png|jpe?g|svg)$/));



const LineUp = () => {
  return (
    <div>
        <div className="flex justify-center">
            <h1 className="text-[40px] font-[700] tracking-[2px] font-[Integral] text-center  text-[#fff]  uppercase">The Lineup</h1>
        </div>
        <div className="flex justify-center gap-6 pt-11">
            
            {Object.keys(images).map((image, index) => (
        <div key={index} className="" style={{ marginBottom: '20px' }}>
          <img src={`./PFA/Lineup/${image}`} alt={image} style={{ width: '200px', height: 'auto' }} />
          {/*<h1 className="text-[20px] font-[700] tracking-[2px] font-[Integral] text-center  text-[#fff]  uppercase">Billings</h1> */}
        </div>
      ))}
        </div>
    </div>
  )
}

export default LineUp