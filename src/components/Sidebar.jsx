import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";
import Avatar from "../img/foto6.png";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Lucas Zanin" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a
        href="https://docs.google.com/document/d/e/2PACX-1vRbPPEVZNzIg7whRZNd1I4y-WStUiMftWbgt6heb5FS6tO-SC9egn3G3OszO24Yyg/pub"
        className="btn"
      >
        Download Currículo
      </a>
    </aside>
  );
};

export default Sidebar;
