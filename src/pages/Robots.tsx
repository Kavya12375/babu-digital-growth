import { useEffect } from 'react';

const Robots = () => {
  useEffect(() => {
    // Set the correct MIME type for plain text
    document.querySelector('meta[http-equiv="Content-Type"]')?.setAttribute('content', 'text/plain; charset=UTF-8');
  }, []);

  const robotsContent = `User-agent: *
Allow: /
Sitemap: https://digital-growth-babu.lovable.app/sitemap.xml`;

  return (
    <div 
      style={{ 
        fontFamily: 'monospace', 
        whiteSpace: 'pre-wrap',
        fontSize: '12px',
        margin: 0,
        padding: '10px'
      }}
      dangerouslySetInnerHTML={{ __html: robotsContent }}
    />
  );
};

export default Robots;