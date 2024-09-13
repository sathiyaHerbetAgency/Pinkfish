import '../../styles/contact.css';  
import { Footer, NewNavbar } from '../../components';

const page = () => {
  return (
    <>
      <NewNavbar />
      <div className="text-white  min-h-screen min-w-screen bg-[#000]  overflow-hidden   flex flex-col">
        <h1 className="contact_text_header md:w-[40%] w-[80%] self-center text-center mt-11">
          PRIVACY POLICY{" "}
        </h1>
        <div className=" flex justify-center pb-24">
          <ul className="text_tnc_container  ">
            <li className="flex flex-col gap-2">
              <h5 className="tnc_text_header">1. Data Collection</h5>
              <p className="tnc_text">
                1.1. Personal Information: Pinkfish may collect personal
                information, such as your name, email address, postal address,
                and phone number and other information when you register for the
                event, purchase tickets, or engage with our services.
              </p>
              <p className="tnc_text">
                1.2. Payment Information: If you make a purchase through our
                Website, Pinkfish may collect payment information, such as
                credit card details and billing information, to process your
                transactions securely.{" "}
              </p>
              <p className="tnc_text">
                1.3. Automatically Collected Information: Pinkfish may
                automatically collect non-personal information, including your
                IP address, browser type, operating system, and usage data when
                you visit our Website. This data is used for analytics and
                improving our services.{" "}
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <h5 className="tnc_text_header">2. Information</h5>
              <p className="tnc_text">
                2.1. Festival Services: Pinkfish use your information to provide
                festival-related services, process ticket orders, and
                communicate festival updates.
              </p>
              <p className="tnc_text">
                2.2. Communication: Pinkfish may use your email address and
                phone number to send festival-related updates, newsletters, and
                promotional materials. You can unsubscribe from these
                communications at any time.
              </p>
              <p className="tnc_text">
                2.3. Payment Processing: Your payment information is used solely
                for processing ticket purchases and related transactions.
              </p>
              <p className="tnc_text">
                2.4. Analytics: Pinkfish use non-personal information for
                analytical purposes to enhance your festival experience and
                improve our Website.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <h5 className="tnc_text_header">3. Data Security</h5>
              <p className="tnc_text">
                Pinkfish take reasonable steps to protect your personal
                information. However, please be aware that no method of data
                transmission over the internet can be guaranteed as entirely
                secure. You share information with us at your own risk.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <h5 className="tnc_text_header"> 4. Data Sharing </h5>
              <p className="tnc_text">
                Pinkfish do not sell or rent your personal information to third
                parties. However, Pinkfish may share your information with
                service providers, event partners, and authorities as required
                by law or in the interest of festival security and safety.{" "}
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <h5 className="tnc_text_header">5. Cookies and Tracking </h5>
              <p className="tnc_text">
                Pinkfish may use cookies and other tracking technologies to
                collect data about your interactions with our Website. You can
                manage your cookie preferences through your browser settings.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <h5 className="tnc_text_header">6. Third-party Links </h5>
              <p className="tnc_text">
                Our Website may contain links to third-party websites. Pinkfish
                is not responsible for the privacy practices or content of these
                third-party websites.{" "}
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <h5 className="tnc_text_header">
                7. Changes to This Privacy Policy{" "}
              </h5>
              <p className="tnc_text">
                Pinkfish may periodically update this Privacy Policy. Any
                changes will be posted on this page, along with a revised
                "Effective Date." It is your responsibility to review the policy
                regularly.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <h5 className="tnc_text_header">8. Contact Us </h5>
              <p className="tnc_text">
                If you have any questions or concerns regarding this Privacy
                Policy or your personal information, please contact us at{" "}
                <a
                  className="underline zoom-[1px]"
                  href="mailto:info@pinkfishfestival.com"
                >
                  {" "}
                  info@pinkfishfestival.com
                </a>
                .{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
      <img
        className=" md:block hidden right-[0] top-[70%]  fixed  "
        src="/fish.png"
      />
    </>
  );
}

export default page