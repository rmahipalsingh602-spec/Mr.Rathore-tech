(() => {
  const techProfiles = {
    ai: {
      label: 'AI SEO focus',
      title: 'AI Platform, Automation Tools and Official Software Downloads',
      description: 'Discover Mr. Rathore AI platform, desktop software, automation tools, and official downloads with search-ready content built for modern tech demand.',
      summary: 'Latest content angle focuses on AI agents, document intelligence, productivity tools, and official software pages with commercial plus branded search intent.',
      hero: 'Current optimization focus AI, automation, productivity software, and software download intent par tuned hai taaki site latest search demand ko better match kar sake.',
      keywords: ['AI platform', 'AI tools', 'workflow automation', 'document intelligence', 'productivity software', 'official software downloads'],
      intent: 'Commercial plus branded',
      content: 'Landing pages, FAQ clusters, feature pages',
      notes: ['Trend-aware metadata', 'AI pages, keywords, and schema are now the primary discovery layer.', 'Search-ready architecture', 'AI product language plus FAQ content improves topical relevance.', 'Official trust signals', 'Official downloads help users and search engines trust the destination.']
    },
    automation: {
      label: 'Automation SEO focus',
      title: 'Automation Software, Workflow Tools and Productivity Downloads',
      description: 'Explore workflow automation software, desktop productivity tools, and official product downloads from Mr. Rathore technology company.',
      summary: 'This profile highlights automation software, business workflows, time-saving tools, and practical desktop utilities.',
      hero: 'Automation-focused SEO ab workflow tools, time-saving desktop software, and business process keywords ko prefer karta hai.',
      keywords: ['automation software', 'workflow tools', 'business automation', 'desktop utilities', 'productivity app', 'software downloads'],
      intent: 'Commercial plus solution-seeking',
      content: 'Comparison pages, workflow pages, feature lists',
      notes: ['Workflow-first metadata', 'Automation search terms now lead the title and description.', 'Operational relevance', 'Content now emphasizes efficiency, workflows, and practical usage.', 'Trust through clarity', 'Download intent stays clear while automation messaging becomes stronger.']
    },
    'app-development': {
      label: 'App Development SEO focus',
      title: 'App Development Products, Desktop Apps and Software Downloads',
      description: 'Mr. Rathore technology company showcases desktop applications, developer products, and official software builds for modern app development audiences.',
      summary: 'This profile pushes app development, software product, desktop application, and release-focused discovery terms.',
      hero: 'App development profile ab desktop apps, product builds, releases, and software engineering discovery terms ko strengthen karta hai.',
      keywords: ['app development', 'desktop applications', 'software products', 'developer tools', 'release builds', 'official downloads'],
      intent: 'Commercial plus product discovery',
      content: 'Release notes, product pages, developer FAQs',
      notes: ['Developer-oriented metadata', 'App development and software product language becomes more visible.', 'Build-driven intent', 'Product and release terminology helps developer discovery.', 'Structured trust', 'Schema keeps the company and product graph consistent.']
    },
    'web-development': {
      label: 'Web Development SEO focus',
      title: 'Web Development, SEO-Ready Products and Official Tech Resources',
      description: 'Browse web development products, SEO-ready pages, official downloads, and technology resources from Mr. Rathore company.',
      summary: 'This profile leans into web development, SEO-ready website language, deployment assets, and digital product discovery.',
      hero: 'Web development focus ab SEO-ready website structure, deployment assets, and scalable web product language ko boost karta hai.',
      keywords: ['web development', 'SEO-ready website', 'website deployment', 'web product', 'tech resources', 'digital product'],
      intent: 'Commercial plus informational',
      content: 'Landing pages, deployment guides, SEO content hubs',
      notes: ['Web-first metadata', 'Web development and SEO-ready site language now lead discovery.', 'Website relevance', 'The page highlights deployment assets and searchable web properties.', 'Better clustering', 'This profile is useful when targeting website and SEO-related queries.']
    },
    'cyber-security': {
      label: 'Cyber Security SEO focus',
      title: 'Cyber Security Tools, Trusted Software and Official Downloads',
      description: 'Find trusted software, official downloads, and technology products with a cyber security oriented SEO profile from Mr. Rathore company.',
      summary: 'This profile emphasizes trusted software, official distribution, secure workflows, and reliability-focused search language.',
      hero: 'Cyber security profile ab trusted software, secure workflows, official builds, and reliability-oriented keyword signals ko strengthen karta hai.',
      keywords: ['cyber security tools', 'trusted software', 'official builds', 'secure workflows', 'software reliability', 'safe downloads'],
      intent: 'Trust-building plus commercial',
      content: 'Security FAQs, trust pages, official release pages',
      notes: ['Trust-centered metadata', 'Security language supports authority and safer-download messaging.', 'Official distribution', 'The page now leans harder on authenticity and official builds.', 'Reliability signals', 'This profile is strong for trust-sensitive audiences.']
    },
    'data-analytics': {
      label: 'Data Analytics SEO focus',
      title: 'Data Analytics Tools, AI Workflows and Official Product Downloads',
      description: 'Explore data analytics workflows, AI tools, software products, and official downloads from Mr. Rathore technology company.',
      summary: 'This profile shifts the page toward data analytics, insight workflows, AI-assisted analysis, and practical software utility keywords.',
      hero: 'Data analytics focus ab insight tools, AI-assisted analysis, and practical productivity workflows ko stronger search signals deta hai.',
      keywords: ['data analytics tools', 'AI analysis', 'insight workflows', 'productivity software', 'software tools', 'official downloads'],
      intent: 'Commercial plus informational',
      content: 'Use-case pages, workflow explainers, product overviews',
      notes: ['Analytics-led metadata', 'Data, insights, and analysis keywords become the discovery lead.', 'Use-case positioning', 'The page leans into practical workflows and analysis language.', 'Broader reach', 'This profile supports informational plus product discovery queries.']
    }
  };

  const yearProfiles = {
    2026: { featuredTech: 'ai', freshness: 'Updated for 2026 search signals' },
    2025: { featuredTech: 'automation', freshness: 'Updated for 2025 search signals' },
    default: { featuredTech: 'ai', freshness: 'Updated for current year signals' }
  };

  const faqItems = [
    ['What does Mr. Rathore company build?', 'Mr. Rathore company builds AI tools, automation software, desktop productivity apps, developer platforms, and web products.'],
    ['Can this website auto-change SEO by tech focus?', 'Yes. The built-in SEO engine updates page title, meta description, keywords, schema topics, and hero messaging based on the selected tech focus.'],
    ['Will this website rank number one on Google automatically?', 'Number one rankings are never guaranteed, but strong technical SEO, relevant content, backlinks, speed, and trust can improve ranking potential.'],
    ['Why are official downloads important for SEO?', 'Official downloads support trust, branded search behavior, and clear product intent signals.'],
    ['How should the latest tech trends be updated in future?', 'This site uses a local trend configuration today and can later connect to APIs, research workflows, or scheduled content updates.'],
    ['What should be added next for even better ranking?', 'Dedicated blog posts, service pages, product detail pages, Search Console verification, and backlink strategy are the strongest next steps.']
  ];

  const products = [
    { '@type': 'SoftwareApplication', name: 'OMNI', applicationCategory: 'ProductivityApplication', operatingSystem: 'Windows', downloadUrl: 'downloads/OMNI-Setup-0.1.0.exe' },
    { '@type': 'SoftwareApplication', name: 'NeuroAI Platform', applicationCategory: 'BusinessApplication', operatingSystem: 'Windows', downloadUrl: 'downloads/NeuroAI-Setup-0.0.0-x64.exe' },
    { '@type': 'SoftwareApplication', name: 'MRL_HI', applicationCategory: 'DeveloperApplication', operatingSystem: 'Windows', downloadUrl: 'downloads/MRL_HI-Setup-3.1.0.exe' },
    { '@type': 'WebSite', name: 'Pocket Gamer', url: 'https://pocket-gamer.netlify.app/' }
  ];

  const year = new Date().getFullYear();
  const yearProfile = yearProfiles[year] || yearProfiles.default;
  const buttons = Array.from(document.querySelectorAll('[data-tech]'));

  const meta = (key, value, attr = 'name') => {
    let node = document.querySelector(`meta[${attr}="${key}"]`);
    if (!node) {
      node = document.createElement('meta');
      node.setAttribute(attr, key);
      document.head.appendChild(node);
    }
    node.setAttribute('content', value);
  };

  const text = (id, value) => {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  };

  const schema = (id, value) => {
    const node = document.getElementById(id);
    if (node) node.textContent = JSON.stringify(value);
  };

  const normalizePath = (pathname) => pathname.replace(/index\.html$/, '') || '/';
  const siteUrl = () => {
    if (!window.location.origin || window.location.origin === 'null') return '/';
    return `${window.location.origin}${normalizePath(window.location.pathname)}`;
  };
  const absolute = (path) => {
    if (/^https?:/i.test(path) || siteUrl() === '/') return path;
    return new URL(path, `${siteUrl().endsWith('/') ? siteUrl() : `${siteUrl()}/`}`).href;
  };

  const renderKeywords = (keywords) => {
    const box = document.getElementById('trend-keywords');
    if (!box) return;
    box.innerHTML = '';
    keywords.forEach((keyword) => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = keyword;
      box.appendChild(span);
    });
  };

  const applyProfile = (key, syncUrl = true) => {
    const profile = techProfiles[key] || techProfiles.ai;
    const canonical = siteUrl();
    const fullTitle = `${profile.title} | Mr. Rathore Tech Company`;
    const description = `${profile.description} ${yearProfile.freshness}.`;
    const keywords = profile.keywords.join(', ');

    document.title = fullTitle;
    meta('description', description);
    meta('keywords', keywords);
    meta('og:title', fullTitle, 'property');
    meta('og:description', description, 'property');
    meta('og:url', canonical, 'property');
    meta('twitter:title', fullTitle);
    meta('twitter:description', description);

    const canonicalNode = document.getElementById('canonical-link');
    if (canonicalNode) canonicalNode.href = canonical;

    text('hero-eyebrow', `${profile.label} active for ${year}`);
    text('hero-trend-copy', profile.hero);
    text('trend-label', profile.label);
    text('trend-title', profile.title);
    text('trend-summary', profile.summary);
    text('trend-year', `${year} search profile`);
    text('trend-intent', profile.intent);
    text('trend-freshness', yearProfile.freshness);
    text('trend-content', profile.content);
    text('note-one-title', profile.notes[0]);
    text('note-one-copy', profile.notes[1]);
    text('note-two-title', profile.notes[2]);
    text('note-two-copy', profile.notes[3]);
    text('note-three-title', profile.notes[4]);
    text('note-three-copy', profile.notes[5]);
    renderKeywords(profile.keywords);

    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.tech === key));
    });

    localStorage.setItem('mr-rathore-tech-focus', key);
    if (syncUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set('tech', key);
      history.replaceState({}, '', `${normalizePath(url.pathname)}?${url.searchParams.toString()}`);
    }

    schema('organization-schema', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Mr. Rathore',
      url: canonical,
      logo: absolute('assets/logo.png'),
      description,
      knowsAbout: profile.keywords,
      sameAs: ['https://pocket-gamer.netlify.app/']
    });

    schema('website-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Mr. Rathore Tech Company',
      url: canonical,
      description,
      inLanguage: 'en-IN',
      keywords
    });

    schema('product-schema', {
      '@context': 'https://schema.org',
      '@graph': products.map((item) => {
        if (item['@type'] === 'WebSite') return item;
        return { ...item, downloadUrl: absolute(item.downloadUrl) };
      })
    });

    schema('faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer }
      }))
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => applyProfile(button.dataset.tech));
  });

  const params = new URLSearchParams(window.location.search);
  const initial = params.get('tech') || localStorage.getItem('mr-rathore-tech-focus') || yearProfile.featuredTech;
  applyProfile(initial, false);
})();
