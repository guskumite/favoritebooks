import "./App.css";
import Booklist from "./components/Booklist";

function App() {
  const mybooks = [
    {
      id: 1,
      url: "https://www.amazon.com/dp/B0B7R4Q5DJ/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-4&pf_rd_r=0V02RZY7A0C255QH3D5K&pf_rd_t=101&pf_rd_p=44155fb9-6bb0-4c59-ac88-727ad0c4d569&pf_rd_i=3003015011",
      picture: "https://m.media-amazon.com/images/I/51YGx8qVVXL.jpg",
    },
  ];
  return (
    <main>
      <Booklist mybooks={mybooks} />
    </main>
  );
}

export default App;
