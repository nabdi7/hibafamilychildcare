import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://najahfamilychildcare.com',
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: 'https://najahfamilychildcare.com/about',
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: 'https://najahfamilychildcare.com/programs',
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: 'https://najahfamilychildcare.com/contact',
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: 'https://najahfamilychildcare.com/gallery',
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: 'https://najahfamilychildcare.com/testimonials',
            lastModified: new Date(),
            priority: 0.8,
        },
    ]
}