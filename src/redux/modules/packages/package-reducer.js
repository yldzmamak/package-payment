import * as actionTypes from './package-type';

const initialState = { data: null, isLoading: false, error: null };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PACKAGES_REQUEST:
      return { data: state.data, isLoading: true, error: null };

    case actionTypes.GET_PACKAGES_SUCCESS:
      action.payload
        ? action.payload.map(item => (item.selected = false))
        : state.data.map(item => (item.selected = false));
      return {
        data: action.payload,
        isLoading: false,
        error: null,
      };

    case actionTypes.GET_PACKAGES_FAILURE:
      return {
        data: state.data,
        isLoading: false,
        error: action.payload,
      };

    case actionTypes.SET_SELECTED_PACKAGES:
      state.data.map(item =>
        item.id === action.payload.toString() ? (item.selected = !item.selected) : null,
      );
      return {
        data: [...state.data],
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
