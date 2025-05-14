import SingleBook from "./SingleBook";
const BookList = function (array) {
  return (
    <>
      {array.objs.map((book) => (
        <SingleBook key={libro.asin} libro={book} />
      ))}
    </>
  );
};
export default BookList;
