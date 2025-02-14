import { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import Utils from "../../utils/utility";
import { InviteHero } from "../../components/InviteHero/InviteHero";
import { Footer } from "../../components/Footer/Footer";

const Main = () => {
  useEffect(() => {
    Utils.setPageTitle("Jithin & Ashley - Home");
  }, []);

  return (
    <div>
      {/* Head */}
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
