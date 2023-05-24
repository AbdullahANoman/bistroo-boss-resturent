

const MenuItem = ({item}) => {
    console.log(item)
    const {image,name,price,recipe} = item || {};
    return (
        <div className="flex gap-5">
            <img className="w-[120px] h-[105px]" style={{borderRadius:'0px 200px 200px 200px'}} src={image} alt="" />
            <div>
            <p className="text-2xl">{name}  ------------------</p>
            <p className="text-lg text-gray-500">{recipe}</p>
            </div>
            <p className="text-3xl text-[#BB8506]">${price}</p>

        </div>
    );
};

export default MenuItem;