import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://zainabshujat.vercel.app';

  // List your main pages
  const staticPages = [
    '',
    'about',
    'contact',
    'explore',
    'play-and-experiment',
    'portfolio',
    'projects',
    'tools-for-humans',
    'worlds-and-ideas',
  ];

  // List your project subpages
  const projectPages = [
    'careeriq',
    'newsletter',
    'pennypath',
    'sentiment-analysis',
    'sibslove',
    'suika-lite',
  ];

  let urls = staticPages.map(
    (page) => `<url><loc>${baseUrl}/${page}</loc></url>`
  );

  urls = urls.concat(
    projectPages.map(
      (proj) => `<url><loc>${baseUrl}/projects/${proj}</loc></url>`
    )
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

git add app/sitemap.xml/route.ts
git commit -m "Add dynamic sitemap"
git push