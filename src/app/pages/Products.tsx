import Nav from "../components/Nav";
import Table from "../components/Table";

const Products = () => {
    return (
        <div className="l">
            <div className="l__sidebar">
                <Nav></Nav>
            </div>
            <div className="l__content">
                <div className="title title--terc m--top-32 m--left-24">Start adding products!</div>
                <div className="flex flex--justify--space-between m--top-46 m--left-24 m--right-24">
                    <input className="search" type="text" />
                    <button className="btn btn--secondary m--left-8">ADD PRODUCT <i className="icon icon--plus m--left-46"></i></button>
                </div>
                <Table></Table>
            </div>
        </div>
    )
};

export default Products;