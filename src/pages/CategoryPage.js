import MenuBody from "../components/menu/MenuBody";
import GeneralSection from "../components/general/GeneralSection";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <>
      <MenuBody>
        <GeneralSection
          category={category}
          number={10}
          clName={"general-page"}
        />
      </MenuBody>
    </>
  );
};

export default CategoryPage;
