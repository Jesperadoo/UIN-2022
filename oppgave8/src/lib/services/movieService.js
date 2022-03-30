import client from '../client'

const movieFields = `
  _id,
  title,
  'poster': poster{asset->{url}},
  'actor': actor->name.current,
`
const actorFields = `
  fullName,
  name,
  fact,
  'slug' : name.current,
`

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`)
  return data
}

export const getMovieByActor = async (actor) => {
  const data = await client.fetch(
    `*[_type == "movie" && actor->name.current==$actor]{${movieFields}}`,
    { actor }
  )
  return data
}

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actor"]{${actorFields}}`)
  return data
}

export const getActorInfo = async (slug) => {
  const data = await client.fetch(
    `*[_type == "actor" && slug.current == $slug]{${actorFields}}`,
    { slug }
  )
  return data?.[0]
}
