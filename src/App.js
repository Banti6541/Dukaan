import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Products from "./components/Products/Products";
import Header from "./components/Layouts/Header";
//import SubHeader from "./components/Layouts/SubHeader";

const App = () => {
  return (
    <div>
      <Header/>
      
      <Products/>
    </div>
  );
}

export default App;
