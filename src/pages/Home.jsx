import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Home = () => {
    return (
        <>
            <h2>Welcome to my Home page</h2>
            <Button variant="destructive">Click me</Button>
            <Link to="/about">Go to about page</Link>
        </>
    )
}

export default Home;