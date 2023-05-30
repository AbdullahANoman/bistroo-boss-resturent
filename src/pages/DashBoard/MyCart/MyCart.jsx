import useCart from "../../../hooks/useCart";

const MyCart = () => {
    const [carts] = useCart()
    const total = carts.reduce((sum,item)=> item.price+sum ,0)
    return (
        <div>
            <p>This is my cart</p>
            <p>Total Orders {carts?.length}</p>
            <p>Total Price {parseInt(total)}</p>
        </div>
    );
};

export default MyCart;