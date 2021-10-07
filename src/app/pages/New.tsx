import { useHistory } from "react-router";
import Nav from "../components/Nav";

const New = () => {
    const history = useHistory();
    const redirectProducts = () => {
        history.push("/products")
    }

    return (
        <div className="l">
            <div className="l__sidebar">
                <Nav></Nav>
            </div>
            <div className="l__content">
                <div className="title title--terc m--top-32 m--left-40">Add product</div>
                <div className="m--top-40 m--left-46 nunito--semi-bold nunito--14"><i className="icon icon--arr-left m--right-16" onClick={redirectProducts}></i>Back</div>
                <div className="form  m--top-24 m--left-40">
                    <div className="nunito--semi-bold nunito--18 m--top-24 m--left-24">Add new product</div>
                    
                    <div className="label m--top-24">Barcode</div>
                    <input className="input input--base" type="text" placeholder="Barcode"/>
                    <div className="label">Name</div>
                    <input className="input input--base" type="text" placeholder="Name"/>
                    <div className="label">Details</div>
                    <input className="input input--base" type="text" placeholder="Details"/>
                    <div className="label">Quantity</div>
                    <input className="input input--sm" type="number" placeholder="0"/>

                    <div className="btn btn--primary m--top-80 m--left-24 m--right-24 m--bot-24">ADD PRODUCT</div>
                </div> 
            </div>
        </div>

    )
};

export default New;