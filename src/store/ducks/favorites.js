/* 
 * REDUCER
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_FAVORITE_REQUEST':
      return {
        ...state, loading: true
      };
    case 'ADD_FAVORITE_SUCCESS':
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.data],
        error: null
      };
    case 'ADD_FAVORITE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state;
  }
}

/* 
 * ACTIONS
*/
export const Creators = {
  addFavoriteRequest: repository => ({
    type: 'ADD_FAVORITE_REQUEST',
    payload: { repository },
  }),
  
  addFavoriteSuccess: data => ({
    type: 'ADD_FAVORITE_SUCCESS',
    payload: { data },
  }),
  
  addFavoriteFailure: error => ({
    type: 'ADD_FAVORITE_FAILURE',
    payload: { error },
  }),
};
