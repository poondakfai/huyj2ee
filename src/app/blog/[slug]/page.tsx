import Document from '@/components/ui/Document';
import { DOMPurify, loadBlog, SlugParams } from '@/lib/utils';

export default async function Blog({params}: {params: SlugParams}) {
  const { slug } = await params;
  const blog = loadBlog(slug);
  const content = blog ? DOMPurify.sanitize(blog.content) : '';
  return (
    <Document>
      <div dangerouslySetInnerHTML={{__html: content}} className='document'/>
    </Document>
  );
}