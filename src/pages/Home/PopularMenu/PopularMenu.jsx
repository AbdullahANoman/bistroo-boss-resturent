
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";




const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter(menu=>menu.category == 'popular')
    return (
        <section className="max-w-screen-xl	mx-auto">
            <SectionTitle
            header={'FROM OUR MENU'}
            subHeader={'Popular Items'}
            ></SectionTitle>
            <MenuCategory items={popularItems}></MenuCategory>
        </section>
    );
};

export default PopularMenu;