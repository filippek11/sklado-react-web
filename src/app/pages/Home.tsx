import { useHistory } from "react-router";

const Home = () => {
    const history = useHistory();
    const redirectProducts = () => {
        history.push("/products")
    }
    
    return (
        <div className="wrapper">
            <i className="icon icon--logo"></i>
            <div className="title title--primary m--top-80">Welcome to Sklado!</div>
            <div className="title title--secondary m--top-24">Jump right in!</div>
            <button className="btn btn--primary m--top-32" onClick={redirectProducts}>VIEW PRODUCTS<i className="icon icon--arr-right-long m--left-16"></i></button>
        </div>
    )
};

export default Home;