
module.exports = () => ({
    //...
    meilisearch: {
      config: {
        // Meili host
        host: process.env.MEILISEARCH_HOST,
        // Meili master key
        apiKey: process.env.MEILISEARCH_KEY,
      },
    }
  })