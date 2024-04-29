/* eslint-disable */
import '../../../styles/live.css';
import Navbar from '../../../sections/Navbar';
import FooterLive from '../../../sections/FooterLive';
const Contact = () => (
  <>
  <Navbar />
  <div className="contact_main_container_live  min-h-screen flex justify-center text-white pt-11 mb-11  ">
    <div className="  flex flex-col md:flex-row w-[90%]  md:w-[80%] ">
      <div className="md:basis-1/2 ">
        <h1 className="contact_header_live">reach out to us</h1>
        <p className="contact_text_live mt-6">We're all ears for your feedback, inquiries, and game-changing suggestions, 
        and we're fully committed to making your Pinkfish experience nothing short of legendary.
        </p>
        <div className="flex flex-col gap-1 hidden md:block">

          <h1 className="contact_sub_header_live mt-6">email</h1>
          <p className="contact_text_live mt-3">info@pinkfishfestival.com</p>
          <h1 className="contact_sub_header_live mt-3 mb-3">Socials</h1>
          <div className='flex flex-col'>
          <a href='https://www.instagram.com/pinkfishfestival/' target="_blank" className="contact_text_live ">Instagram</a>
           <a href='https://www.youtube.com/@Pinkfishfestival' target="_blank" className="contact_text_live ">Youtube</a>
          <a href='https://www.facebook.com/pinkfishfestival/' target="_blank" className="contact_text_live ">Facebook</a>
          <a href=' https://www.tiktok.com/@pinkfishfestival' target="_blank" className="contact_text_live ">TikTok</a>
        </div>
        </div>
      </div>

      <div className="md:basis-1/2 mt-11 md:mt-0 ">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="contact_label_live">Name</label>
            <input className="contact_input_live" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="contact_label_live">Email</label>
            <input className="contact_input_live" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="contact_label_live">Subject</label>
            <input className="contact_input_live"  type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="contact_label_live">Message</label>
            <textarea className="contact_input_live" type="text" />
          </div>
          <div className='contact_submit_live'>
          <button className="flex " type="submit">Submit
            <svg className="mt-2 ml-1 " width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
            </svg>
          </button>
          </div>
        </form>
      </div>
      <div className='flex justify-center'>
      <div className="flex flex-col  gap-1  items-center md:hidden">

<h1 className="contact_sub_header_live mt-6">email</h1>
<p className="contact_text_live mt-3">info@pinkfishfestival.com</p>
<h1 className="contact_sub_header_live mt-3 mb-3">Socials</h1>
<div className='flex flex-col gap-2'>
<a href='https://www.instagram.com/pinkfishfestival/' target="_blank" className="contact_text_1_live underline text-center ">Instagram</a>
           <a href='https://www.youtube.com/@Pinkfishfestival' target="_blank" className="contact_text_1_live underline text-center ">Youtube</a>
          <a href='https://www.facebook.com/pinkfishfestival/' target="_blank" className="contact_text_1_live underline text-center ">Facebook</a>
          <a href=' https://www.tiktok.com/@pinkfishfestival' target="_blank" className="contact_text_1_live underline text-center ">TikTok</a>

</div>
</div>
</div>
    </div>
  </div>
  <FooterLive />
  </>

);

export default Contact;
