import Document from '@/components/ui/Document';
import { loadProject, SlugParams } from '@/lib/utils';

export default async function Project({params}: {params: SlugParams}) {
  const { slug } = await params;
  const project = loadProject(slug);
  const content = project ? project.document : '';
  return (
    <Document>
      <div dangerouslySetInnerHTML={{__html: content}} className='document'/>
    </Document>
  );
}
