export const initialState = {
  favorites: [],
  films:[],
};

export const actionTypes = {
  ADD_DATA:"ADD_DATA",
  ADD_FAVORITES: "ADD_FAVORITES",
  DELETE_FAVORITES: "DELETE_FAVORITES",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_DATA:
      return {
        ...state,
        films: action.data,
      };
      case actionTypes.ADD_FAVORITES:
        const exist = state.favorites.find((item) => item.imdbID == action.favorite.imdbID);
        if (exist) {
          return {
            ...state,
          };
        } else {
          return {
            ...state,
            favorites: [...state.favorites, action.favorite],
          };
        }
    case actionTypes.DELETE_FAVORITES:
      console.log("hola estoy en el reducer delete")
      return{
        ...state,
        favorites:state.favorites.filter(item=>
          item!==action.film
        )
      }
    default:
      return state;
  }
};
export default reducer;