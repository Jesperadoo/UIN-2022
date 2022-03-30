export default {
  type: 'document',
  name: 'actor',
  title: 'Skuespiller',
  fields: [
    {
      type: 'string',
      name: 'fullName',
      title: 'Fullt navn',
      description: 'Skuespillerens fulle navn',
    },
    {
      type: 'slug',
      name: 'name',
      title: 'Slug',
      description: 'Dette er er slug til hver skuespiller',
      'slug': 'name.current',
      options: {
        source: 'fullName',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 50),
      },
    },
    {
      type: 'string',
      name: 'fact',
      title: 'Beskrivelse',
      description: 'Dette er beskrivelsen av skuespilleren',
    }
  ],
}