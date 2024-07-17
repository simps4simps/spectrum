import "./App.scss";
import Editor from "./Components/Editor/Editor";

const App = () => {
  return (
    <div id="app-wrapper">
      <div className="editor-wrapper">
        <Editor />
      </div>
    </div>
  );
};

export default App;
