import { loadCV, loadHome } from '@/lib/utils';

export default function Contact() {
  const cvcontent: string = loadCV();
  return (
    <div className="document-container">
      <div dangerouslySetInnerHTML={{__html: cvcontent}} className="document" />
    </div>
  );
}
