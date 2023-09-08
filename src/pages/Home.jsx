import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h2>Welcome to my Home page</h2>
            <Link to="/about">Go to about page</Link>
        </>
    )
}

export default Home;