import Todos from "./components/todos";
import "./App.css";
import BackgroundImage from "./assets/bg-desktop-dark.jpg";

function App() {
  return (
    <section className=" bg-dark-veryDarkBlue w-screen h-screen">
      <figure className="w-full h-2/5">
        <img
          src={BackgroundImage}
          className="w-full h-full object-cover aspect-auto"
        />
      </figure>
      <div className="mx-4 p-4 max-w-lg md:mx-auto -translate-y-36">
        <div className=" font-josefin text-4xl text-white tracking-widest mb-8">
          Todo
        </div>
        <Todos />
      </div>
    </section>
  );
}

export default App;
