import Link from "next/link";

interface PaginationProps {
  pages: number;
  pageNumber: number;
  route: string;
}

const Pagination = ({ pages, pageNumber, route }: PaginationProps) => {
  const pageLimit = 2;
  const startPage = Math.max(1, pageNumber - Math.floor(pageLimit / 2));
  const endPage = Math.min(pages, startPage + pageLimit - 1);

  const prev = pageNumber - 1;
  const next = pageNumber + 1;

  return (
    <div className="flex flex-wrap items-center justify-center mt-5 mb-10 space-x-1">
      {pageNumber !== 1 && (
        <Link
          href={`${route}?pageNumber=${prev}`}
          className="mx-1 border border-gray-300 bg-white text-gray-700 py-1 px-2 md:px-4 rounded-l-lg shadow-md cursor-pointer hover:bg-gray-100 transition text-sm md:text-base"
        >
          Prev
        </Link>
      )}

      {startPage > 1 && (
        <>
          <Link
            href={`${route}?pageNumber=1`}
            className="mx-1 border border-gray-300 py-1 px-2 md:px-4 rounded-md shadow-md cursor-pointer hover:bg-blue-100 transition text-sm md:text-base"
          >
            1
          </Link>
          {startPage > 2 && <span className="mx-2 text-sm md:text-base">...</span>}
        </>
      )}

      {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((page) => (
        <Link
          href={`${route}?pageNumber=${page}`}
          className={`${
            pageNumber === page
              ? "bg-gray-600 text-white"
              : "bg-white text-gray-600"
          } mx-1 border border-gray-300 py-1 px-2 md:px-4 rounded-md shadow-md cursor-pointer hover:bg-blue-100 transition text-sm md:text-base`}
          key={page}
        >
          {page}
        </Link>
      ))}

      {endPage < pages && (
        <>
          {endPage < pages - 1 && <span className="mx-2 text-sm md:text-base">...</span>}
          <Link
            href={`${route}?pageNumber=${pages}`}
            className="mx-1 border border-gray-300 py-1 px-2 md:px-4 rounded-md shadow-md cursor-pointer hover:bg-blue-100 transition text-sm md:text-base"
          >
            {pages}
          </Link>
        </>
      )}

      {pageNumber !== pages && (
        <Link
          href={`${route}?pageNumber=${next}`}
          className="mx-1 border border-gray-300 bg-white text-gray-700 py-1 px-2 md:px-4 rounded-r-lg shadow-md cursor-pointer hover:bg-gray-100 transition text-sm md:text-base"
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;
