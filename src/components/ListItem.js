//import AddToCartIcon from "..\src\assets\icons\ShoppingCartIcon.png"
import './ListItem.css';

const ListItem = ({ data }) => {
    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title} />
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>₹{data.discountedPrice}</span>
                    &nbsp;
                    <small>
                        <strike>₹{data.price}</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h6>{data.title}</h6>
                </div>
                <div className='AddToCartButton'>
                    <button className={"btn btn-success"}>
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ListItem