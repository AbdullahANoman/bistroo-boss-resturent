import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title }) => {
    const handle = ()=>{
        console.log(title)
    }
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 py-10 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/shop/${title}`}><button onClick={()=>handle()} className="btn btn-outline flex mx-auto my-5">Order your favourite food</button></Link>
    </>
  );
};

export default MenuCategory;
