import { config, connector, graph } from '@grafbase/sdk'

const g = graph.Standalone()

const mongo = connector.MongoDB('MongoDB', {
  url: g.env('MONGO_API_URL'),
  apiKey: g.env('MONGO_API_KEY'),
  dataSource: g.env('MONGO_DATASOURCE'),
  database: g.env('MONGO_DATABASE'),
})

g.datasource(mongo)

mongo
  .model('User', {
    name: g.string(),
    email: g.string().optional(),
    // address: g.ref(address)
  })
  .collection('users')

export default config({
  graph: g,
})


