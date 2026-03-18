import BlogList from '@/components/ui/BlogList';
import PaginationBar from '@/components/ui/PaginationBar';
import { BlogBriefProps, countSearchBlogsPage, QueryParams, searchBlogs, toSearchPattern } from '@/lib/utils';

export default async function SearchResult({searchParams}: {searchParams: QueryParams}) {
  const { q, page } = await searchParams;
  const queryParams = new URLSearchParams('');
  const pattern: string = toSearchPattern(q);
  const p: number = page ? + page : 1;
  const pageCount = countSearchBlogsPage(pattern);
  const blogs: BlogBriefProps[] = searchBlogs(p, pattern);
  queryParams.set('q', q);

  return (
    <div className='blog-list'>
      <BlogList blogs={blogs} />
      <PaginationBar urlPrefix={`searchedblogs?${queryParams.toString()}&`} pageCount={pageCount} page={p} />
    </div>
  );

}
