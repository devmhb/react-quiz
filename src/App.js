import "../src/styles/App.css";
import Layout from "./components/Layout.jsx";
import "./styles/App.css";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
