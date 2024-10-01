import Link from "next/link";

interface PaginationProps {
  pages: number;
  pageNumber: number;
  route: string;
}
const Pagination = ({ pages, pageNumber, route }: PaginationProps) => {
  let pagesArray: number[] = [];

  for (let i = 1; i <= pages; i++) {
    pagesArray.push(i);
  }

  const prev = pageNumber - 1;
  const next = pageNumber + 1;
  return (
    <div className="flex items-center justify-center mt-5 mb-10">
      {pageNumber !== 1 && (
        <Link
          href={`${route}?pageNumber=${prev}`}
          className="mx-1 border border-gray-300 bg-white text-gray-700 py-1 px-4 rounded-l-lg shadow-md cursor-pointer hover:bg-gray-100 transition"
        >
          Prev
        </Link>
      )}
      {pagesArray.map((page) => (
        <Link
          href={`${route}?pageNumber=${page}`}
          className={`${
            pageNumber === page
              ? "bg-gray-600 text-white"
              : "bg-white text-gray-600"
          } mx-1 border border-gray-300 py-1 px-4 rounded-md shadow-md cursor-pointer hover:bg-blue-100 transition`}
          key={page}
        >
          {page}
        </Link>
      ))}
      {pageNumber !== pages && (
        <Link
          href={`${route}?pageNumber=${next}`}
          className={`mx-1 border border-gray-300 bg-white text-gray-700 py-1 px-4 rounded-r-lg shadow-md cursor-pointer hover:bg-gray-100 transition`}
        >
          Next
        </Link>
      )}
    </div>
  );
};
export default Pagination;
