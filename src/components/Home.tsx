import { Link } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";

function Home() {
  return (
    <Card>
      <h2 className="heading">Welcome to the Trivia Challenge!</h2>
      <div className="main-text">
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you score 100%</p>
        <div className="text-center">
          <Link to="/quiz">
            <Button type="button">Begin</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default Home;
