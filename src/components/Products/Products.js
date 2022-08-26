import ListItem from "../ListItem";
import './Products.css';

const items = [
    {
        id: 0,
        discountedPrice: 340,
        price: 450,
        title: "Title of the Item 1",
        thumbnail: "ListItemImage.png"
    },
    {
        id: 1,
        discountedPrice: 80,
        price: 100,
        title: "Title of the Item 2",
        thumbnail: "ListItemImage.png"
    },
    {
        id: 2,
        discountedPrice: 1000,
        price: 1250,
        title: "Title of the Item 3",
        thumbnail: "ListItemImage.png"
    },
    {
        id: 3,
        discountedPrice: 120,
        price: 150,
        title: "Title of the Item 4",
        thumbnail: "ListItemImage.png"
    }
]

const Products = () => {
    return (
        <div className="container">
            <ListItem data = {items[0]}></ListItem>
            <ListItem data = {items[1]}></ListItem>
            <ListItem data = {items[2]}></ListItem>
            <ListItem data = {items[3]}></ListItem>
        </div>
    );
}

export default Products