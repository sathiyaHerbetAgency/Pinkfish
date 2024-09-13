import '../../../styles/live.css';
import Navbar from '../../../sections/Navbar';
import FooterLive from '../../../sections/FooterLive'
import Head from './../../../components/head';
const Terms_Condition = () => {
  const description="Discover the best live music events in Malaysia & Southeast Asia with Pinkfish! Immerse yourself in the vibrant music scene and experience unforgettable performances."
  const title="Live music event in Malaysia & Southeast Asia | Pinkfish  "
  return (
    <>
      <Head title={title} description={description} />
      <Navbar />
      <div className="text-white  min-h-screen min-w-screen  overflow-hidden mt-11 mb-11 flex flex-col">
        <h1 className="tnc_header_live">terms & Conditions</h1>
        <ul className="text_tnc_container_live ">
          <li className="flex flex-col gap-2">
            <h5 className=".tnc_text_header_live">1. Ticketing and Entry </h5>
            <p className="tnc_text_live">
              1.1. All event attendees must possess a valid ticket for entry,
              which must be presented upon request.{" "}
            </p>
            <p className="tnc_text_live">
              1.2. Tickets are non-transferable and non-refundable, except as
              expressly stated in these terms.{" "}
            </p>
            <p className="tnc_text_live">
              1.3. Organiser reserves the right to refuse entry or eject any
              attendee for any reason, including but not limited to behaviour
              that poses a threat to safety or disrupts the event.{" "}
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <h5 className=".tnc_text_header_live">2. Age Restrictions </h5>
            <p className="tnc_text_live">
              2.1. Proof of age is required upon entry, and any attendees found
              to be underage will not be granted access to the event, and their
              tickets may be subject to forfeiture without a refund. Please
              ensure that you meet the age requirement before purchasing tickets
              or attending the event.{" "}
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <h5 className=".tnc_text_header_live">
              3. Event Rules and Conduct{" "}
            </h5>
            <p className="tnc_text_live">
              3.1. All attendees are expected to conduct themselves in a
              respectful and lawful manner.
            </p>
            <p className="tnc_text_live">
              3.2. Prohibited items and behaviours may include (but are not
              limited to) illegal substances, weapons, harassment, violence, and
              vandalism.{" "}
            </p>
            <p className="tnc_text_live">
              {" "}
              3.3. The Event has a strict zero tolerance policy on drugs. If
              anyone is suspected of consuming or having any illegal substances
              or prohibited items, the organiser reserves the right to search
              and/or remove the person from the venue.{" "}
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <h5 className=".tnc_text_header_live"> 4. Security and Safety </h5>
            <p className="tnc_text_live">
              4.1. Security personnel will be present at the event to ensure the
              safety of all attendees.{" "}
            </p>
            <p className="tnc_text_live">
              4.2. Attendees must follow the instructions of event staff and
              security personnel.{" "}
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <h5 className=".tnc_text_header_live">
              5. Ticket Refunds and Exchanges{" "}
            </h5>
            <p className="tnc_text_live">
              5.1. Tickets are non-refundable unless the event is cancelled,
              postponed, or rescheduled, in which case the ticket holder may be
              entitled to a refund or exchange as determined by the event
              organisers.{" "}
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <h5 className=".tnc_text_header_live">
              {" "}
              6. Event Schedule and Lineup{" "}
            </h5>
            <p className="tnc_text_live">
              6.1. The event schedule, lineup, and artist performances are
              subject to change without notice.{" "}
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <h5 className=".tnc_text_header_live">
              7. Photography and Videography{" "}
            </h5>
            <p className="tnc_text_live">
              7.1. By entering the event, you hereby agree that the organiser
              has the right to use audio, photos and/or videos taken before,
              during and after the event for promotional purposes and may not
              claim any copyright or compensation for the production of such
              promotional materials.{" "}
            </p>
            <p className="tnc_text_live">
              7.2. Unauthorised professional-grade photography and recording
              equipment may not be allowed.{" "}
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <h5 className=".tnc_text_header_live">8. Lost or Stolen Items </h5>
            <p className="tnc_text_live">
              The Organiser shall not be responsible for loss or damage of
              property or belongings. Please keep all items at your own risk.{" "}
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <h5 className=".tnc_text_header_live">9. Health and Medical</h5>
            <p className="tnc_text_live">
              9.1. By entering the venue, you hereby indemnify the organisers,
              its partners and suppliers of any injury, diseases or death that
              may occur to you. The organisers will not be held responsible for
              any injuries or death sustained during the course of the event.{" "}
            </p>
            <p className="tnc_text_live">
              9.2. Medical assistance will be available on-site.
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <h5 className=".tnc_text_header_live">10. Weather </h5>
            <p className="tnc_text_live">
              10.1. The event will take place rain or shine unless it is unsafe
              to do so. No refunds will be issued due to inclement weather.
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <h5 className=".tnc_text_header_live">11. Liability and Release</h5>
            <p className="tnc_text_live">
              11.1. Attendees voluntarily assume all risks and dangers
              incidental to the event.{" "}
            </p>
            <p className="tnc_text_live">
              11.2. The event organisers are not liable for any personal injury,
              loss, or damage to property.{" "}
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <h5 className=".tnc_text_header_live">12. Termination </h5>
            <p className="tnc_text_live">
              {" "}
              12.1. The organiser reserves the right to terminate any attendee's
              participation for violation of these terms without refund.{" "}
            </p>
          </li>
          <li className="tnc_text_live ">
            By purchasing a ticket and attending the event, you agree to abide
            by these terms and conditions. Failure to comply may result in
            ejection from the event without refund.{" "}
          </li>
        </ul>
      </div>
      <FooterLive />
    </>
  );
}

export default Terms_Condition