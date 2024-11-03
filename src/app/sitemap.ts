import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.najahfamilychildcare.com/',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://www.najahfamilychildcare.com/about',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
        url: 'https://www.najahfamilychildcare.com/programs',
        lastModified: new Date(),
        priority: 0.6,
      },
    {
      url: 'https://www.najahfamilychildcare.com/contact',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
        url: 'https://www.najahfamilychildcare.com/testimonials',
        lastModified: new Date(),
        priority: 0.5,
      },
    {
      url: 'https://www.najahfamilychildcare.com/gallery',
      lastModified: new Date(),
      priority: 0.5,
    },
  ]
}