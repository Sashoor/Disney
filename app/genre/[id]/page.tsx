import { notFound } from "next/navigation";
// import { decode } from "punycode";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  return <div>Welcome to the genre: {id} and name: {genre}</div>;
}

export default GenrePage;
