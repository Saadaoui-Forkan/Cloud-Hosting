interface SearchArticlesProps {
  searchParams: {
    article: string
  }
}

const Search = ({ searchParams }: SearchArticlesProps) => {
  console.log(searchParams)
  return (
    <div>
      <h1>Search Text is: {searchParams.article}</h1>
    </div>
  )
}

export default Search