import { loadCV } from '@/lib/utils';
import Document from '@/components/ui/Document';

export default function Contact() {
  const cvcontent: string = loadCV();
  return (
    <Document>
      <div dangerouslySetInnerHTML={{__html: cvcontent}} className='document'/>
    </Document>
  );
}
