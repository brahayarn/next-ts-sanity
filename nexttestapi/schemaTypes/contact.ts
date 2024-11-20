export default {
  name: 'constructionService',
  title: 'Construction Service',
  type: 'document',
  fields: [
    {
      name: 'homePageContent',
      title: 'Home Page Content',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Main title for the homepage (e.g., "Construction Estimating Services").',
        },
        {
          name: 'highlightedCountries',
          title: 'Highlighted Countries',
          type: 'array', // Array of strings for simplicity
          of: [{ type: 'string' }],
          description: 'List of countries to highlight (e.g., USA, Canada).',
        },
      ],
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'contactNumber',
      title: 'Contact Number',
      type: 'string',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'name', type: 'string' },
            { name: 'url', title: 'Social Link', type: 'url' },
            {
              name: 'image',
              title: 'Icon/Image',
              type: 'image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
    {
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' }
          ],
        },
      ],
    },
  ],
};
