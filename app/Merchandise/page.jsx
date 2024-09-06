/* eslint-disable */
"use client";
import "../../styles/contact.css";
import { motion } from "framer-motion";
import { Footer, NewNavbar,Button } from "../../components";
import Link from 'next/link';
import Head from './../../components/head';

const page = () => {
  const description="Discover the vibrant Pinkfish Music & Arts Festival, featuring live acts and art installations from local and international artists. Join us for a unique creative experience! "
  const title="Experience the Best Music Festival in Malaysia - Pinkfish "

  return (
    <>
     <Head title={title} description={description} />
      <NewNavbar />
      <div className=" min-h-screen  text-white   ">
        <div className="contact_main_container_what-merchandise flex flex-col justify-center pd:mb-0 pb-6      ">
          <div className="flex flex-col gap-6    ">
            <div className="w-[80%] md:w[50%] flex flex-col justify-center gap-6 self-center  ">
              <div className="flex md:gap-6 h-[150px]  gap-3 flex-col justify-center ">
                <div className="flex justify-center gap-3  items-center contact_text_header ">
                  <h1 className="contact_text_header-merchandise  text-center max-w-2xl md:max-w-3xl">
                    pinkfish official merchandise{" "}
                    <span className="sale-container"> Sale!</span>{" "}
                  </h1>
                </div>
                <h2 className="contact_sub_text_merchandise text-center"> View our collection now!</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full md:max-w-screen-lg">
          <div classsName=" flex self-center max-w-full ">
            <div className="flex md:flex-row flex-col md:justify-between  min-w-full  py-[64px]">
              <div classname="md:max-w-[60%] max-w-[80%] px-12 ">
                <img
                  className="border-4 border-[#FF0086] md:h-[26rem]"
                  src="/chaigo_1.png"
                  alt="product"
                />
              </div>
              <div className="md:max-w-[40%] flex flex-col items-center">
                <div className="max-w-[80%]">
                  <div>
                  <div className="max-w-xl flex flex-col gap-1 pt-5">
                    <h2 className="text-white font-family:Babas product-title font-bold uppercase">
                      cop the exclusive PFF2024 X chaigo the stray fit 
                    </h2>
                    <p className="product-sub-title">
                      pinkfish X Chaigo T-shirt
                    </p>
                    <div className="flex gap-3">
                      <p className="product-price">RM68.00</p>
                      <p className="product-price crossed">RM85.00</p>
                      <span className="inline-flex items-center rounded-xl bg-[#DA3F3F] px-2  text-[12px] font-medium text-white font-[Poppins-Regular]  uppercase">
                        Save 20%
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <p className="product-Size">L</p>
                      <p className="product-Size">XL</p>
                      <p className="product-Size">2XL</p>
                      </div>
                  </div>
                  </div>
                  <Button />
                </div>
              
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
          <div className="grid grid-cols-1 md:grid-cols-3 place-content-center self-center gap-4">
            <div classsName=" flex self-center max-w-full  ">
              <div className="flex  flex-col  min-w-full md:py-16 py-6 ">
                <div classname=" ">
                  <img
                    className=""
                    src="/pattern-shirt-1-full.png"
                    alt="product"
                  />
                </div>
                <div className="w-full">
                    <div className=" flex flex-col gap-1 pt-5">
                      {/* <h2 className="text-white font-family:Babas product-title font-bold uppercase">
                        cop the exclusive PFF2024 X chaigo the stray fit 
                      </h2> */}
                      <p className="product-sub-title">
                        pinkfish X Chaigo T-shirt
                      </p>
                      <div className="flex gap-3">
                        <p className="product-price">RM84.00</p>
                        <p className="product-price crossed">RM105.00</p>
                        <span className="inline-flex items-center rounded-xl bg-[#DA3F3F] px-2  text-[12px] font-medium text-white font-[Poppins-Regular]  uppercase">
                          Save 20%
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <p className="product-Size-small">XL</p>
                        <p className="product-Size-small">2XL</p>
                        <p className="product-Size-small">3XL</p>
                        <p className="product-Size-small">4XL</p>
                        <p className="product-Size-small">5XL</p>
                        </div>
                    </div>
                </div>
               <Button />
              </div>
            </div>
            <div classsName=" flex self-center max-w-full  ">
              <div className="flex  flex-col  min-w-full md:py-16 py-6 ">
                <div classname="">
                  <img
                    className=""
                    src="/wtfshirt-2-full.png"
                    alt="product"
                  />
                </div>
                <div className="w-full">
                    <div className=" flex flex-col gap-1 pt-5">
                      {/* <h2 className="text-white font-family:Babas product-title font-bold uppercase">
                        cop the exclusive PFF2024 X chaigo the stray fit 
                      </h2> */}
                      <p className="product-sub-title">
                        pinkfish X Chaigo T-shirt
                      </p>
                      <div className="flex gap-3">
                        <p className="product-price">RM72.00</p>
                        <p className="product-price crossed">RM90.00</p>
                        <span className="inline-flex items-center rounded-xl bg-[#DA3F3F] px-2  text-[12px] font-medium text-white font-[Poppins-Regular]  uppercase">
                          Save 20%
                        </span>
                      </div>
                      <div className="flex gap-3">
                      <p className="product-Size-small">m</p>
                        <p className="product-Size-small">L</p>
                        <p className="product-Size-small">XL</p>
                        <p className="product-Size-small">2XL</p>
                        <p className="product-Size-small">3XL</p>
                        <p className="product-Size-small">4XL</p>
                        <p className="product-Size-small">5XL</p>
                        </div>
                    </div>
                </div>
                <Button />
              </div>
            </div>
            <div classsName=" flex self-center max-w-full  ">
              <div className="flex  flex-col  min-w-full md:py-16 py-6 ">
                <div classname="">
                  <img
                    className=""
                    src="/bandana-full.png"
                    alt="product"
                  />
                </div>
                <div className="w-full">
                    <div className=" flex flex-col gap-1 pt-5">
                      {/* <h2 className="text-white font-family:Babas product-title font-bold uppercase">
                        cop the exclusive PFF2024 X chaigo the stray fit 
                      </h2> */}
                      <p className="product-sub-title">
                      pinkfish bandana
                      </p>
                      <div className="flex gap-3">
                        <p className="product-price">RM24.00</p>
                        <p className="product-price crossed">RM30.00</p>
                        <span className="inline-flex items-center rounded-xl bg-[#DA3F3F] px-2  text-[12px] font-medium text-white font-[Poppins-Regular]  uppercase">
                          Save 20%
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <p className="product-Size-small">ONE SIZE</p>
                        </div>
                    </div>
                </div>
                <Button />

              </div>
            </div>
            <div classsName=" flex self-center max-w-full ">
              <div className="flex  flex-col  min-w-full md:py-16 py-6  ">
                <div classname="">
                  <img
                    className=""
                    src="/bucket-hat-full.png"
                    alt="product"
                  />
                </div>
                <div className="w-full">
                    <div className=" flex flex-col gap-1 pt-5">
                      {/* <h2 className="text-white font-family:Babas product-title font-bold uppercase">
                        cop the exclusive PFF2024 X chaigo the stray fit 
                      </h2> */}
                      <p className="product-sub-title">
                      bucket hat
                      </p>
                      <div className="flex gap-3">
                        <p className="product-price">RM56.00</p>
                        <p className="product-price crossed">RM70.00</p>
                        <span className="inline-flex items-center rounded-xl bg-[#DA3F3F] px-2  text-[12px] font-medium text-white font-[Poppins-Regular]  uppercase">
                          Save 20%
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <p className="product-Size-small">ONE SIZE</p>
                        </div>
                    </div>
                </div>
                <Button />

              </div>
            </div>
            <div classsName=" flex self-center max-w-full  ">
              <div className="flex  flex-col  min-w-full md:py-16 py-6 ">
                <div classname="">
                  <img
                    className=""
                    src="wtf-cap-full.png"
                    alt="product"
                  />
                </div>
                <div className="w-full">
                    <div className=" flex flex-col gap-1 pt-5">
                      {/* <h2 className="text-white font-family:Babas product-title font-bold uppercase">
                        cop the exclusive PFF2024 X chaigo the stray fit 
                      </h2> */}
                      <p className="product-sub-title">
                      wtf cap
                      </p>
                      <div className="flex gap-3">
                        <p className="product-price">RM48.00</p>
                        <p className="product-price crossed">RM60.00</p>
                        <span className="inline-flex items-center rounded-xl bg-[#DA3F3F] px-2  text-[12px] font-medium text-white font-[Poppins-Regular]  uppercase">
                          Save 20%
                        </span>
                      </div>
                      <div className="flex gap-3">
                      <p className="product-Size-small">ONE SIZE</p>
                        </div>
                    </div>
                </div>
                <Button />
              </div>
            </div>
</div>
</div>
        </div>
        <h2 className="contact_sub_text_merchandise text-[18px] text-center pt-8"> *Price excludes processing fee.</h2>

      </div>
      <Footer />
      <img
        className=" md:block hidden right-[0] top-[70%]  fixed  "
        src="/fish.png"
      />
    </>
  );
};

export default page;
