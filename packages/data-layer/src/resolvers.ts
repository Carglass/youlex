export default {
  Query: {
    laws: async (_, __, { dataSources }) => {
      const laws = await dataSources.mongoAPI.getLaws();
      return laws;
    }
  }
};
