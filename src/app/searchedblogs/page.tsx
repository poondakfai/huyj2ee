import { QueryParams } from "@/lib/utils";

export default async function SearchResult({searchParams}: {searchParams: QueryParams}) {
  const { q, page } = await searchParams;
  return (
    <h1>SearchResult: {q}</h1>
  );
}
