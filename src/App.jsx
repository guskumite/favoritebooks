import "./App.css";
import Booklist from "./components/Booklist";
import keto6 from "../public/keto6.png";
import respCivilMedica from "../public/responsabilidadcivilmedica.png";

function App() {
  const otherStuff = [
    {
      id: 2,
      title: "Amazon Basics Neoprene Workout Dumbbell",
      url: "https://amzn.to/3OQwlbb",
      btntitle: "Buy Now",
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/61oSwPvRWLL._AC_UL225_SR225,160_.jpg",
    },
    {
      id: 3,
      title:
        "Cats Dogs ID Tags Personalized Lovely Symbols Pets Collar Name Accessories Simple Custom Engraved Products for Extra Small Four Legged Child Necklace Chain Anti-Lost Shiny Stainless Steel Charm",
      url: "https://amzn.to/47GU3yZ",
      btntitle: "Buy Now",
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/61pFszChatL._AC_UL225_SR225,160_.jpg",
    },
    {
      id: 4,
      title: "Canada's Identity Theft & Credit Protection (only Canada)",
      url: "https://cdnnd.com/srv.html?id=5532544&pub=2791940",
      btntitle: "Buy Now",
      picture: "https://cdndn.com/images/campaigns/5532544_120x120.png",
    },
  ];
  const mybooks = [
    {
      id: 7,
      title: "Amazon books: Hello Beautiful",
      url: "https://amzn.to/45zja5D",
      btntitle: "Buy Now",
      picture: "https://m.media-amazon.com/images/I/51YGx8qVVXL.jpg",
    },
    {
      id: 1,
      title: "Responsabilidad Civil Médica",
      url: "https://pam.grantitan.com/web/TrackingWeb/GetOfferRedirectionUrl?parameter=Le6QiwabxM6jiIa0B3LKmJlzR51EBWDdswu1DkPPECk%3D",
      btntitle: "Cotizar ahora",
      picture: respCivilMedica,
    },
    {
      id: 2,
      title: "Amazon books: Necessary Trouble",
      url: "https://amzn.to/44kImLB",
      btntitle: "Buy Now",
      picture:
        "https://m.media-amazon.com/images/I/41oihh5M3jL._SX331_BO1,204,203,200_.jpg",
    },

    {
      id: 3,
      title: "Amazon books: Spanish Edition: Shintergy, La puerta de atrás",
      url: "https://amzn.to/3YMhjaQ",
      btntitle: "Buy Now",
      picture:
        "https://m.media-amazon.com/images/I/51Av8lN8yiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      id: 4,
      title:
        "The top 10 foods for a Keto Diet, Los 10 alimentos para una dieta Keto",
      url: "https://youtu.be/kx4lr2yBiOI",
      btntitle: "Watch Now",
      picture: keto6,
    },
    {
      id: 5,
      title: "The Origin of Opportunity",
      url: "https://amzn.to/46VZ8CN",
      btntitle: "Buy Now",
      picture: "https://m.media-amazon.com/images/I/618p3nw+qWL._SY425_.jpg",
    },
  ];

  mybooks.push({
    id: 6,
    title: "Free books in Spanish, libros esotéricos en español",
    url: "https://www.libroesoterico.com",
    btntitle: "Visit-Visitar",
    picture:
      "https://libroesoterico.com/wp-content/webp-express/webp-images/uploads/2021/01/homeimg1-min-300x300.png.webp",
  });

  return (
    <main>
      <h1 className="text-xl font-extrabold">Books and offers:</h1>
      <Booklist mybooks={mybooks} />
      <h1 className="text-xl font-extrabold">Miscellaneus:</h1>
      <Booklist mybooks={otherStuff} />
    </main>
  );
}

export default App;
