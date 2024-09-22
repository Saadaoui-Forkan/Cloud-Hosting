const pages = [1, 2, 3, 4, 5];
const Pagination = () => {
  return (
    <div className="flex items-center justify-center mt-5 mb-10">
      <div className="mx-1 border border-gray-300 bg-white text-gray-700 py-1 px-4 rounded-l-lg shadow-md cursor-pointer hover:bg-gray-100 transition">
        Prev
      </div>
      {pages.map(page => (
        <div
          className="mx-1 border border-gray-300 bg-white text-gray-700 py-1 px-4 rounded-md shadow-md cursor-pointer hover:bg-blue-100 transition"
          key={page}
        >
          {page}
        </div>
      ))}
      <div className="mx-1 border border-gray-300 bg-white text-gray-700 py-1 px-4 rounded-r-lg shadow-md cursor-pointer hover:bg-gray-100 transition">
        Next
      </div>
    </div>
  );
};
export default Pagination;
