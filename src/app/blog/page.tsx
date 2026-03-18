import Link from 'next/link';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BlogBriefProps, BlogsParams, countBlogsPage, loadBlogs } from '@/lib/utils';
import PaginationBar from '@/components/ui/PaginationBar';
import BlogList from '@/components/ui/BlogList';

export default async function Blogs({searchParams}: {searchParams: BlogsParams}) {
  const { page } = await searchParams;
  const p: number = page ? +page : 1;
  const pageCount = countBlogsPage();
  const blogs: BlogBriefProps[] = loadBlogs(p);

  return (
    <div className='blog-list'>
      <BlogList blogs={blogs} />
      <PaginationBar urlPrefix='/blog?' pageCount={pageCount} page={p} />
    </div>
  );
}
