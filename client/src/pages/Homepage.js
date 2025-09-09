import {Link} from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage text-center">
        <h1>Mood Letter</h1>
        <h2 className="mb-4">Create your own newsletter in seconds!</h2>
        <Link to="/create-campaign">
            <div className="btn btn-primary">Create now</div>
        </Link>
    </div>
  );
}

export default Homepage;
