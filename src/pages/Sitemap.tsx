import { useEffect } from 'react';

const Sitemap = () => {
  useEffect(() => {
    // Set the correct MIME type for XML
    document.querySelector('meta[http-equiv="Content-Type"]')?.setAttribute('content', 'application/xml; charset=UTF-8');
  }, []);

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://digital-growth-babu.lovable.app/</loc>
    <lastmod>2025-08-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://digital-growth-babu.lovable.app/services</loc>
    <lastmod>2025-08-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://digital-growth-babu.lovable.app/packages</loc>
    <lastmod>2025-08-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://digital-growth-babu.lovable.app/about-us</loc>
    <lastmod>2025-08-05</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://digital-growth-babu.lovable.app/blog</loc>
    <lastmod>2025-08-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://digital-growth-babu.lovable.app/contact-us</loc>
    <lastmod>2025-08-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

  return (
    <div 
      style={{ 
        fontFamily: 'monospace', 
        whiteSpace: 'pre-wrap',
        fontSize: '12px',
        margin: 0,
        padding: '10px'
      }}
      dangerouslySetInnerHTML={{ __html: xmlContent }}
    />
  );
};

export default Sitemap;