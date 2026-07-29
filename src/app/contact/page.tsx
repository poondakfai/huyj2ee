import { loadHome } from '@/lib/utils';

export default function Contact() {
  return (
    <div className="content-section">
      <h2 className="section-heading">Contact</h2>
      <div className="contact-content">
        <div className="col col-half">
          <p>Email: n/a</p>
        </div>
        <div className="col col-half">
          <p>GitHub: <a href="https://github.com/huyj2ee" target="_blank" rel="noopener noreferrer">https://github.com/huyj2ee</a></p>
        </div>
      </div>
      <div
        style={{marginLeft: '8px', marginTop: '24px'}}
      >
      	Please contact me via freelancer website.
      </div>
    </div>
  );
}
