import Button from "./Button";
import Card from "./Card";

function QuestionIdle({ handleClick }: { handleClick: () => void }) {
  return (
    <Card>
      <h2 className="heading">Hmmm...</h2>
      <div className="main-text">
        <p>Questions should start loading automatically. You can try loading them manually by clicking the button.</p>
        <div className="text-center">
          <Button onClick={handleClick} type="button">
            Load questions
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default QuestionIdle;
