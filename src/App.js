import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Products from "./components/Products/Products";
import Header from "./components/Layouts/Header";

const App = () => {
  return (
    <div>
      <br/>
      <Header/>
      <Products/>
    </div>
  );
}

export default App;
