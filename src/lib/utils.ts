import Database from 'better-sqlite3';
import path from 'path';

const LIMIT = 5;
const dbPath = path.join(process.cwd(), 'blog.db');
const db = new Database(dbPath, { readonly: true });

export type SlugParams = {
  slug: number
};

export type QueryParams = {
  q: string,
  page: string
};

export type BlogsParams = {
  page: string
};

export type HomeProps = {
  name: string,
  quote: string,
  img: string,
  content: string
};

export type ProjectProps = {
  slug: number,
  document: string
};

export type ProjectBriefProps = {
  slug: number,
  img: string,
  name: string,
  brief: string
};

export type BlogProps = {
  slug: number,
  content: string
};

export type BlogBriefProps = {
  slug: number,
  title: string,
  brief: string
};

export function loadHome(): HomeProps | undefined {
  const rows:any[] = db.prepare('SELECT name, quote, img, content FROM Homes').all();
  if (rows.length === 0) {
    return undefined;
  }

  return rows[0] as HomeProps;
}

export function loadProjects(): ProjectBriefProps[] {
  const rows:any[] = db.prepare('SELECT slug, img, name, brief FROM Projects ORDER BY createdAt DESC').all();

  return rows as ProjectBriefProps[];
}

export function loadProject(slug: number): ProjectProps | undefined {
  const rows:any[] = db.prepare(`SELECT slug, document FROM Projects WHERE slug=${slug}`).all();
  if (rows.length === 0) {
    return undefined;
  }

  return rows[0] as ProjectProps;
}

export function countBlogsPage(): number {
  const rows:any[] = db.prepare('SELECT count(slug) FROM Blogs').all();
  if (rows.length === 0) {
    return 0;
  }
  const count: number = rows[0]['count(slug)'];
  let result: number = Math.floor(count / LIMIT);
  if (count % LIMIT > 0) {
    result = result + 1;
  }
  return result;
}

export function loadBlogs(page: number): BlogBriefProps[] {
  const offset = (page - 1) * LIMIT;
  const rows:any[] = db.prepare(`SELECT slug, title, brief FROM Blogs ORDER BY createdAt DESC LIMIT ${LIMIT} OFFSET ${offset}`).all();

  return rows as BlogBriefProps[];
}

export function loadBlog(slug: number): BlogProps | undefined {
  const rows:any[] = db.prepare(`SELECT slug, content FROM Blogs WHERE slug=${slug}`).all();
  if (rows.length === 0) {
    return undefined;
  }

  return rows[0] as BlogProps;
}

export function loadCV(): string {
  const rows:any[] = db.prepare('SELECT content FROM CVs').all();
  if (rows.length === 0) {
    return '';
  }
  return rows[0].content;
}
