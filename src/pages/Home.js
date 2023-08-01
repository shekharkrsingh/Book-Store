import useFetch from "../components/useFetch";
import Cards from "../components/Cards";

const Home = ({isLoggedIn}) => {
    const {data, isPending, error} = useFetch("http://localhost:4040/books");

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <Cards isLoggedIn={isLoggedIn} data={data}/>}
        </div>

    );
}

export default Home;