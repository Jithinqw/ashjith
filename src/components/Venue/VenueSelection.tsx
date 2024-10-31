import { useEffect, useState } from "react";
import { cmsContent } from "../../cms";
import { List } from "./List";
import ListItem, { IListItem } from "./ListItem";
import { Nav } from "./Nav";
import { NavItem } from "./NavItem";

export interface IVenue {
  venue: Array<IListItem>;
  filterKeys: Array<{ displayValue: string; key: string }>;
  displayType: string;
}
interface IKey {
  top?: boolean;
  airport?: boolean;
  venue?: boolean;
  nature?: boolean;
  shopping?: boolean;
}
export const VenueSelection = (props: IVenue) => {
  const [currentVenueList, setCurrentVenueList] = useState<IListItem[]>();
  const [topActive, setTopActive] = useState<IKey>({
    top: true,
    airport: false,
    venue: false,
    nature: false,
    shopping: false,
  });
  useEffect(() => {
    if (props.venue && props.venue.length > 0) {
      const topVenue = props.venue.filter(
        (e) => e.head.toLowerCase() === "top"
      );
      setCurrentVenueList(topVenue);
      setTopActive({ ...topActive, top: true });
    }
  }, []);

  const updateKey = (keyName: string) => {
    if (keyName === "venue") {
      setTopActive({
        airport: false,
        venue: true,
        top: false,
        shopping: false,
        nature: false,
      });
      const airPortVenue = props.venue.filter(
        (e) => e.head.toLowerCase() === "venue"
      );
      setCurrentVenueList(airPortVenue);
    } else if (keyName === "airport") {
      setTopActive({
        airport: true,
        venue: false,
        top: false,
        shopping: false,
        nature: false,
      });
      const venue = props.venue.filter(
        (e) => e.head.toLowerCase() === "airport"
      );
      setCurrentVenueList(venue);
    } else if (keyName === "nature") {
      setTopActive({
        airport: false,
        venue: false,
        top: false,
        shopping: false,
        nature: true,
      });
    } else {
      setTopActive({
        airport: false,
        venue: false,
        top: true,
        shopping: false,
        nature: false,
      });
      const topList = props.venue.filter((e) => e.head.toLowerCase() === "top");
      setCurrentVenueList(topList);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:grid lg:gap-8">
      <div className="lg:col-span-5 xl:col-span-6 flex flex-col">
        <div className="relative z-10 bg-white rounded-xl shadow-xl ring-1 ring-slate-900/5 divide-y divide-slate-100 my-auto xl:mt-18">
          <div className="divide-y divide-slate-100">
            <Nav>
              {props.filterKeys &&
                props.filterKeys.map((e, i) => {
                  return (
                    <NavItem
                      key={i}
                      isActive={topActive[e.key as keyof IKey]}
                      onClick={() => updateKey(e.key)}
                    >
                      {e.displayValue}
                    </NavItem>
                  );
                })}
            </Nav>
            <List>
              {currentVenueList &&
                currentVenueList?.map((e, i) => {
                  return <ListItem {...e} key={i} />;
                })}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};
