import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oy893c18hp01xtcrzm23w5/master',
  cache: new InMemoryCache()
})