export const serviceGroups = [
  { title: 'Marketplace Management', items: [
    ['Amazon Management','/services/amazon'], ['Flipkart Management','/services/flipkart'], ['Meesho Management','/services/meesho'], ['Myntra Management','/services/myntra'], ['Ajio Management','/services/ajio'], ['Nykaa Management','/services/nyka'], ['eBay Management','/services/ebay'], ['Etsy Management','/services/etsy'], ['Shopify Management','/services/shopify'], ['Blinkit Management','/services/blinkit-management'], ['Zepto Management','/services/zepto-management'], ['Instamart Management','/services/instamart-management']
  ]},
  { title: 'Digital Marketing', items: [
    ['Search Engine Optimization (SEO)','/services/seo'], ['Google Ads & PPC','/services/google-ads'], ['Social Media Marketing','/services/smm'], ['Social Media Optimization','/services/smo'], ['Influencer Marketing','/services/influencer'], ['Retention Marketing','/services/retention-marketing'], ['YouTube Marketing','/services/youtube'], ['PR & Press Release','/services/pr-press-release']
  ]},
  { title: 'Web, Creative & Business', items: [
    ['Website Design','/services/website-design'], ['Landing Pages','/services/landing-page'], ['Branding','/services/branding'], ['App Development','/services/app-development'], ['Product Listing Services','/services/listing-services'], ['GST Registration','/services/gst-registration'], ['GST Filing','/services/gst-filing'], ['Trademark Registration','/services/trademark-registration']
  ]}
];
export const searchableServices = serviceGroups.flatMap(group => group.items.map(([label, path]) => ({ label, path, group: group.title })));
