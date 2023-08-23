const Booklist = ({ mybooks }) => {
  const handleBuy = (url) => {
    window.open(url, "_blank");
  };

  return (
      <section>
        <ul className="space-y-4 w-[40rem]">
          {mybooks.map((mybook) => {
            return (
              <li className="flex flex-col items-center" key={mybook.id}>
                <img
                  className="w-[40%] h-[60%]"
                  src={mybook.picture}
                  alt={mybook.title}
                />
                <button
                  className="mb-2 mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                  onClick={() => handleBuy(mybook.url)}
                >
                  Buy Now
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
};

export default Booklist;
