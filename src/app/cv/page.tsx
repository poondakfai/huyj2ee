import Document from '@/components/ui/Document';
import { DOMPurify, loadCV } from '@/lib/utils';

export default function CV() {
  const cvcontent: string = DOMPurify.sanitize(loadCV());

  return (
    <Document>
      <div dangerouslySetInnerHTML={{__html: cvcontent}} className='document'/>
    </Document>
  );
}
