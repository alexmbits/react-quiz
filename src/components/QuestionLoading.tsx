import Card from "./Card";

function QuestionLoading() {
  return (
    <Card>
      <h2 className="heading">Loading questions...</h2>
      <div className="main-text">
        <p>Hold on tight!</p>
      </div>
    </Card>
  );
}

export default QuestionLoading;
