import { loadHome } from '@/lib/utils';

export default function Home() {
  const row = loadHome();
  if (!row) {
    return null;
  }

  return (
    <div className="content-section">
      <h2 className="section-heading">{row.name}</h2>
      <p className="section-sub-heading">{row.quote}</p>
      <img className="about-photo" src={row.img} alt={row.name} />
      <p className="about-content">{row.content}</p>
    </div>
  );
}
