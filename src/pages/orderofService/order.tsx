import { ReactElement, useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import Utils from "../../utils/utility";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import { cmsContent } from "../../cms";
import { useFeatureFlagEnabled } from "posthog-js/react";
import { MainHeading } from "../../components/Liturgy/mainHeading";
import Wrapper from "./wrapper";
import { SubHeading } from "../../components/Liturgy/subHeading";
import { TextPlain } from "../../components/Liturgy/textPlain";
import { List } from "../../components/Liturgy/list";

const OrderOfWorkShip = () => {
  const showWelcomeMessage = useFeatureFlagEnabled("enable-order-of-workship");
  const [orderofWorkEnabled, setOrderOfWorkEnabled] = useState<boolean>(false);

  useEffect(() => {
    Utils.setPageTitle("Jithin & Ashley - Order of Service");
    Utils.redirectToPageIfInviteNotFound();
  }, []);

  useEffect(() => {
    if (showWelcomeMessage) {
      setOrderOfWorkEnabled(true);
    }
  }, [showWelcomeMessage]);

  const renderLiturgy = () => {
    let renderEle: Array<ReactElement> = [];
    const liturgeyContent = cmsContent.pages.orderofworkship.liturgey;
    liturgeyContent &&
      liturgeyContent.sections.length > 0 &&
      liturgeyContent.sections.forEach((e, i) => {
        if (e.sectionType === "mainHeading") {
          renderEle.push(
            <MainHeading
              key={i}
              text={e.components.text}
              isCentered={e.components.isCenter}
            />
          );
        }
        if (e.sectionType === "subHeading") {
          renderEle.push(
            <SubHeading
              key={i}
              text={e.components.text}
              isCentered={e.components.isCenter}
              isLeft={e.components.isLeft}
              isRight={e.components.isRight}
            />
          );
        }
        if (e.sectionType === "text") {
          renderEle.push(<TextPlain key={i} text={e.components.text} />);
        }
        if (e.sectionType === "list" && e.components.type === "none") {
          renderEle.push(
            <List listItems={e.components.items} key={i} listStyle="none" />
          );
        }
        if (e.sectionType === "list" && e.components.type === "number") {
          renderEle.push(
            <List listItems={e.components.items} key={i} listStyle="number" />
          );
        }
        if (e.sectionType === "list" && e.components.type === "bullet") {
          renderEle.push(
            <List listItems={e.components.items} key={i} listStyle="bullet" />
          );
        }
      });
    return <Wrapper ele={renderEle} />;
  };

  return (
    <div>
      <Header />
      {orderofWorkEnabled && (
        <div className="flex justify-center px-8">
          {/* Introduction */}
          <div className="">{renderLiturgy()}</div>
        </div>
      )}
      {!orderofWorkEnabled && (
        <ContentBlock
          mainCta={cmsContent.pages.orderofworkship.mainCta}
          bodyContent={cmsContent.pages.orderofworkship.bodyContent}
        />
      )}
    </div>
  );
};

export default OrderOfWorkShip;
