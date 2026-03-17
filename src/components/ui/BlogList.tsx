import { BlogBriefProps } from '@/lib/utils';
import Link from 'next/link';

type BlogListProps = {
  blogs: BlogBriefProps[]
};

export default function BlogList({ blogs }: BlogListProps) {
  return (
    <>
      {
        blogs.map((blog) => (
          <div className='blog-item' key={blog.slug}>
            <h2>{blog.title}</h2>
            <div className='blog-item-brief'>
              {blog.brief}
            </div>
            <Link className='blog-detail' href={'/blog/' + blog.slug} target='_blank' rel='noopener noreferrer'>READ MORE</Link>
          </div>
        ))
      }
    </>
  );
}