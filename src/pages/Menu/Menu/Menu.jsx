import { Helmet } from "react-helmet-async";

import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import pizza from "../../../assets/menu/pizza-bg.jpg";
import soup from "../../../assets/menu/soup-bg.jpg";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offeredItems = menu.filter((item) => item.category == "offered");
  const dessertItems = menu.filter(item=> item.category == 'dessert');
  const pizzaItems = menu.filter(item=> item.category == 'pizza');
  const soupItems = menu.filter(item=> item.category == 'soup');
  return (
    <div>
      <Helmet>
        <title>Bistroo Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"our menu"}
        message={"would you like to try a dish ?"}
      ></Cover>
      <SectionTitle
        header={"TODAY'S OFFER"}
        subHeader={"Don't miss"}
      ></SectionTitle>
      <div className="max-w-screen-xl	mx-auto">
        <MenuCategory items={offeredItems}></MenuCategory>
        <button className="btn btn-outline flex mx-auto my-5">Order your favourite food</button>
      </div>
      <Cover
        img={dessertImg}
        title={"desserts"}
        message={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
      <div className="max-w-screen-xl	mx-auto">
        <MenuCategory items={dessertItems}></MenuCategory>
        <button className="btn btn-outline flex mx-auto my-5">Order your favourite food</button>
      </div>
      <Cover
        img={pizza}
        title={"pizza"}
        message={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
      <div className="max-w-screen-xl	mx-auto">
        <MenuCategory items={pizzaItems}></MenuCategory>
        <button className="btn btn-outline flex mx-auto my-5">Order your favourite food</button>
      </div>
      <Cover
        img={soup}
        title={"soup"}
        message={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
      <div className="max-w-screen-xl	mx-auto">
        <MenuCategory items={soupItems}></MenuCategory>
        <button className="btn btn-outline flex mx-auto my-5">Order your favourite food</button>
      </div>

    </div>

  );
};

export default Menu;
