import { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import Utils from "../../utils/utility";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import { cmsContent } from "../../cms";

const OrderOfWorkShip = () => {
  useEffect(() => {
    Utils.setPageTitle("Jithin & Ashley - Order of Service");
  }, []);
  return (
    <div>
      <Header />
      {cmsContent.config.orderOfWorkShipEnabled && <div>Order of workship</div>}
      {!cmsContent.config.orderOfWorkShipEnabled && (
        <ContentBlock
          mainCta={cmsContent.pages.orderofworkship.mainCta}
          bodyContent={cmsContent.pages.orderofworkship.bodyContent}
        />
      )}
    </div>
  );
};

export default OrderOfWorkShip;
