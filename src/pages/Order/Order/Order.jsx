import orderImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import Cover from '../../Shared/Cover/Cover';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';


const Order = () => {
  const categories = ['salad','pizza','soup','desserts','drinks']
  const {category} = useParams();

  const initialIndex = categories.indexOf(category)
  console.log(initialIndex)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  
  console.log(category)
  const drinksItems = menu.filter((item) => item.category == "drinks");
  const dessertItems = menu.filter(item=> item.category == 'dessert');
  const pizzaItems = menu.filter(item=> item.category == 'pizza');
  const saladItems = menu.filter(item=> item.category == 'salad');
  const soupItems = menu.filter(item=> item.category == 'soup');
  return (
    <div>
      <Cover
        img={orderImg}
        title={"order food"}
        message={"would you like to try a dish?"}
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALADS</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUP</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
            <OrderTab items={saladItems}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={pizzaItems}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={soupItems}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={dessertItems}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={drinksItems}></OrderTab>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default Order;
