import Layout from "./layout/Layout";
import Home from "./pages/Home";
import "./index.css";
import "tailwindcss/tailwind.css";

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
