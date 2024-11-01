import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import Utils from "../../utils/utility";
import { VenueSelection } from "../../components/Venue/VenueSelection";
import { cmsContent } from "../../cms";
import { Warning } from "../../components/Warning/Warning";

const Venue = () => {
  const [toggleWarning, setToggleWarning] = useState<boolean>(true);

  useEffect(() => {
    Utils.setPageTitle("Jithin & Ashley - Venue");
  }, []);

  const toggleWarningBanner = () => {
    setToggleWarning(!toggleWarning);
  };

  return (
    <>
      <Header />
      <div className="mb-12 overflow-hidden sm:mb-12 md:mb-4">
        <section className="text-center px-8 mt-20 sm:mt-32 md:mt-40">
          <h2 className="text-slate-900 text-4xl font-extrabold sm:text-5xl text-pretty">
            {cmsContent.pages.venue.weddingVenueCta}
          </h2>
          <figure>
            <blockquote>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-pretty">
                {cmsContent.pages.venue.weddingVenueDescription}
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.413103094377!2d76.57870837462747!3d9.026027389036264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06069cf006951b%3A0xb9014b2978da4ac4!2sThevalakkara%20Marthoma%20Valiyapally!5e0!3m2!1sen!2sca!4v1730500247905!5m2!1sen!2sca"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={undefined}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </figcaption>
          </figure>
        </section>
      </div>
      <div className="mb-12 overflow-hidden sm:mb-12 md:mb-4">
        <section className="text-center px-8 mt-20 sm:mt-32 md:mt-40">
          <h2 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl">
            {cmsContent.pages.venue.hotelsCta}
          </h2>
          <figure>
            <blockquote>
              <p className="mt-6 max-w-3xl mx-auto text-lg">
                {cmsContent.pages.venue.hotelsDescription}
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left mb-4">
              <VenueSelection
                venue={cmsContent.pages.venue.mainVenueFeed}
                filterKeys={cmsContent.pages.venue.venueHeads}
                displayType={"hotels"}
              />
            </figcaption>
          </figure>
        </section>
      </div>
      <div className="mb-12 overflow-hidden sm:mb-12 md:mb-4">
        <section className="text-center px-8 mt-20 sm:mt-32 md:mt-40">
          <h2 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl">
            {cmsContent.pages.venue.activitiesCta}
          </h2>
          <figure>
            <blockquote>
              <p className="mt-6 max-w-3xl mx-auto text-lg">
                {cmsContent.pages.venue.activitiesDescription}
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left mb-4">
              <VenueSelection
                venue={cmsContent.pages.venue.mainAttractionFeed}
                filterKeys={cmsContent.pages.venue.attractionHeads}
                displayType={"attractions"}
              />
            </figcaption>
          </figure>
        </section>
      </div>
      {toggleWarning && <Warning onClick={toggleWarningBanner} />}
    </>
  );
};

export default Venue;
