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
    {
      id: 3,
      url: "https://bodegacool.myshopify.com",
      picture:
        "https://app.prodia.com/art-ai?gclid=Cj0KCQjwoK2mBhDzARIsADGbjepkM3ecI_hSoCtYdTwcC2_kqCgBBftW83UkMvd87JKzrHkASAdJB6caAggnEALw_wcB",
    },
    {
      id: 4,
      url: "https://amzn.to/3YMhjaQ",
      picture:
        "https://m.media-amazon.com/images/I/51Av8lN8yiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
  ];
  return (
    <main>
      <Booklist mybooks={mybooks} />
    </main>
  );
}

export default App;
