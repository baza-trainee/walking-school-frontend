import "./App.module.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div style={{ width: "173px" }}>
      <Button
        variant={"tertiary"}
        disabled={false}
        style={{ marginLeft: "100px", marginTop: "100px" }}
      >
        Підтримати
      </Button>
    </div>
  );
}

export default App;
