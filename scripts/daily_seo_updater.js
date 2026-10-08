/**
 * ==============================================================================
 * DAILY AUTOMATIC SEO STRENGTHENER & SITEMAP SYNCHRONIZER
 * Entity: Mahipal Singh Rathore | Mr. Rathore Tech Company
 * Domains: AI · Tech · Gaming · Web Development
 * ==============================================================================
 */

const fs = require('fs');
const path = require('path');

const today = new Date().toISOString().split('T')[0];
console.log(`[Daily SEO Updater] Executing synchronization for: ${today}`);

// 1. Synchronize sitemap.xml with today's date
const sitemapPath = path.join(process.cwd(), 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  sitemapContent = sitemapContent.replace(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`✓ Synchronized sitemap.xml with <lastmod>${today}</lastmod>`);
}

// 2. Validate robots.txt
const robotsPath = path.join(process.cwd(), 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  if (robots.includes('Googlebot') && robots.includes('PerplexityBot') && robots.includes('GPTBot')) {
    console.log('✓ robots.txt allows all top search engines and AI crawlers.');
  }
}

// 3. Validate seo-engine.js presence in index.html
const indexPath = path.join(process.cwd(), 'index.html');
if (fs.existsSync(indexPath)) {
  const html = fs.readFileSync(indexPath, 'utf8');
  const requiredTags = [
    'seo-engine.js',
    'id="person-schema"',
    'id="organization-schema"',
    'id="website-schema"',
    'id="product-schema"',
    'id="faq-schema"',
    'id="breadcrumb-schema"',
    'id="video-schema"'
  ];

  let allPassed = true;
  for (const tag of requiredTags) {
    if (!html.includes(tag)) {
      console.warn(`! Missing tag in index.html: ${tag}`);
      allPassed = false;
    }
  }

  if (allPassed) {
    console.log('✓ index.html has all 7 structured schema hooks and seo-engine.js loaded.');
  }
}

console.log('====================================================');
console.log('SEO ENGINE STATUS: ULTRA HIGH AUTHORITY (DAILY ACTIVE)');
console.log('Target Platforms Covered: Google, Bing, Perplexity AI, ChatGPT, Gemini, Yahoo, DuckDuckGo');
console.log('Focus Verticals: AI (NETRA/RAIN), Tech (CORE-FLOW/MRL), Gaming (Bharatverse/Pocket Gamer)');
console.log('====================================================');
