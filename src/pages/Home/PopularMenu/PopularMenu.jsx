import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu,setMenu] = useState([]);

    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
            const filteredData = data.filter(item=> item.category === 'popular')
            setMenu(filteredData)
        })
    },[])
    return (
        <section>
            <SectionTitle
            header={'FROM OUR MENU'}
            subHeader={'Popular Items'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 py-10 ">
                {
                    menu.map(item=>(
                        <MenuItem key={item._id} item={item}></MenuItem>
                    ))
                }
            </div>
        </section>
    );
};

export default PopularMenu;