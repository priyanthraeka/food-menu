import Categories from "./components/Categories";
import Header from "./components/Header";

function App() {
  return (
    <div className="my-20 flex flex-col items-center justify-center gap-5">
      <Header />
      <Categories />
    </div>
  );
}

export default App;
