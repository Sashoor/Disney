import { notFound } from "next/navigation";
// import { decode } from "punycode";

type Props = {
  params: {
    term: string;
  };
};
function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  // Api call to get the searched movies using tmdb
  // Api call to get the popular movies

  return <div>Welcome to the Search Page: {termToUse}</div>;
}

export default SearchPage;
