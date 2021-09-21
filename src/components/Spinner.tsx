import Card from "./Card";

function Spinner() {
  return (
    <Card>
      <h2 className="heading">Loading, please wait...</h2>
      <div className="main-text mt-8">
        <div className="loader"></div>
      </div>
    </Card>
  );
}

export default Spinner;
