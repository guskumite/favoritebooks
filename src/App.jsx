import "./App.css";
import Booklist from "./components/Booklist";

function App() {
  const mybooks = [
    {
      id: 1,
      url: "https://amzn.to/45zja5D",
      picture: "https://m.media-amazon.com/images/I/51YGx8qVVXL.jpg",
    },
    {
      id: 2,
      url: "https://amzn.to/44kImLB",
      picture:
        "https://m.media-amazon.com/images/I/41oihh5M3jL._SX331_BO1,204,203,200_.jpg",
    },
  ];
  return (
    <main>
      <Booklist mybooks={mybooks} />
    </main>
  );
}

export default App;
