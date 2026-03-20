import Document from '@/components/ui/Document';
import { loadBlog, SlugParams } from '@/lib/utils';

export default async function Blog({params}: {params: SlugParams}) {
  const { slug } = await params;
  const blog = loadBlog(slug);
  const content = blog ? blog.content : '';
  return (
    <Document>
      <div dangerouslySetInnerHTML={{__html: content}} className='document'/>
    </Document>
  );
}