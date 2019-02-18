export const defaults = {
  user: {
    name: false,
    avatarUrl: null,
    __typename: 'user'
  },
}

export const resolvers = {
  Mutation: {
    setUser: (_, variables, { cache }) => {
      const data = {
        user: {
          name: variables.name,
          avatarUrl: variables.avatarUrl,
          __typename: 'user'
        },
      };
      cache.writeData({ data });
    },
  }
}
