export default {
  type: 'document',
  name: 'movie',
  title: 'Film',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Tittel',
      description: 'Fyll inn filmtittel',
    },
    {
      type: 'slug',
      name: 'movieName',
      title: 'Slug',
      description: 'Dette er er slug til hver film',
      options: {
        source: 'title',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 50),
      },
    },
    {
      type: 'image',
      name: 'poster',
      title: 'Plakat',
      description: 'Legg inn plakatbilde',
    },
    {
      type: 'array',
      name: 'actor',
      title: 'Skuespiller',
      description: 'Hent skuespillere',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'actor'
            },
          ]
        },
      ],
    },
  ],
}