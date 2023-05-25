
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items}) => {
  
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 py-10 ">
                {
                    items.map(item=>(
                        <MenuItem key={item._id} item={item}></MenuItem>
                    ))
                }
            </div>
    );
};

export default MenuCategory;