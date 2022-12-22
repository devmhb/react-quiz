import "../src/styles/App.css";
import Layout from "./components/Layout.jsx";
import "./styles/App.css";
// import Home from "./components/pages/Home";
// import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        {/* <SignUp /> */}
        <Login />
      </Layout>
    </div>
  );
}

export default App;
