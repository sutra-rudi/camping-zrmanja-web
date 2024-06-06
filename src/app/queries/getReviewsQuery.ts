export const getReviews = `query NewQuery {
  allZrmanjaKampingRecenzije {
    edges {
      node {
        id
        raftingRecenzijeFields {
          imeMusterije
          poveznicaNaRecenziju
          tekstRecenzijeEn
          tekstRecenzijeHr
        }
      }
    }
  }
}`;
