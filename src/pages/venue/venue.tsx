import { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import Utils from "../../utils/utility";
import { VenueSelection } from "../../components/Venue/VenueSelection";
import { cmsContent } from "../../cms";

const Venue = () => {
  useEffect(() => {
    Utils.setPageTitle("Jithin & Ashley - Venue");
  }, []);
  return (
    <>
      <Header />
      {/* Hotels */}
      <h1 className="font-bold leading-relaxed px-4 sm:px-6 md:px-8">
        {cmsContent.pages.about.nameCta}
      </h1>
      <VenueSelection
        venue={cmsContent.pages.venue.mainVenueFeed}
        filterKeys={cmsContent.pages.venue.venueHeads}
        displayType={"hotels"}
      />
      {/* Attraction */}
      <h1 className="font-bold leading-relaxed px-4 sm:px-6 md:px-8">
        {cmsContent.pages.about.nameCta}
      </h1>
      <VenueSelection
        venue={cmsContent.pages.venue.mainAttractionFeed}
        filterKeys={cmsContent.pages.venue.attractionHeads}
        displayType={"attractions"}
      />
    </>
  );
};

export default Venue;
