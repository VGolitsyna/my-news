import Wrapper from "../components/UI/Wrapper";
import GeneralSection from "../components/general/GeneralSection";
import WorldSection from "../components/world/WorldSection";
import SharesSection from "../components/shares/SharesSection";
import SliderSection from "../components/slider/Slider";
import MenuBody from "../components/menu/MenuBody";

const Main = () => {
  return (
    <>
      <MenuBody>
        <Wrapper>
          <GeneralSection
            category={"general"}
            number={5}
            clName={"general-section"}
          />
          <WorldSection />
          <SharesSection />
        </Wrapper>
        <SliderSection />
      </MenuBody>
    </>
  );
};

export default Main;
