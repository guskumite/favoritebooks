const Booklist = ({ mybooks }) => {
  const handleBuy = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section>
      <ul className="space-y-4 flex flex-wrap items-stretch">
        {mybooks.map((mybook) => {
          return (
            <li className="flex flex-col mt-0 w-96" key={mybook.id}>
              <h1 className="text-sm">{mybook.title}</h1>
              <img
                className="ml-2 block h-full"
                src={mybook.picture}
                alt={mybook.title}
              />
              <button
                className="mb-2 mt-2 h-[4rem] w-[7rem] bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={() => handleBuy(mybook.url)}
              >
                {mybook.btntitle}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Booklist;
