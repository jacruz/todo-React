import AddItem from "./components/addItem";
import ItemList from "./components/itemList";
import Stats from "./components/stats";
import { ItemsProvider } from "./contexts/ItemContext";

function App() {
  
  return (
    <div className="app">
      <ItemsProvider>
        <Stats/>
        <AddItem/>
        <ItemList/>
      </ItemsProvider>
      
      <footer>
        <section className="section-powered-by">
              <p>Powered by <a href="../../personalCV/index.html">Jonnathan Cruz</a></p>
              <div className="txt-small">
                  <p>Inspired by <a href="https://www.freecodecamp.org/news/build-a-todo-app-from-scratch-with-reactjs/">Freecodecamp - Todo App with reactjs</a></p>
              </div>
          </section>
      </footer>
    </div>
  );
}

export default App;
