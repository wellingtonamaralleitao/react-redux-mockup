export const types = {
  AUTO_LOGIN: 'AUTH/AUTH_AUTO_LOGIN',
  SIGNUP_REQUEST: 'AUTH/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'AUTH/SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'AUTH/SIGNUP_FAILURE',
  LOGIN_REQUEST: 'AUTH/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'AUTH/LOGIN_FAILURE',
  LOGOUT: 'AUTH/LOGOUT'
}

export const initialState = {
  user: null,
  isLoading: false,
  error: null
}

export default (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case types.SIGNUP_REQUEST:
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }

    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.user
      }

    case types.SIGNUP_FAILURE:
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    case types.LOGOUT:
      return {
        ...state,
        user: null
      }

    default:
      return state
  }
}

export const actions = {
  signup: (email, password) => ({ type: types.SIGNUP_REQUEST, payload: { email, password }}),
  login: (email, password) => ({ type: types.LOGIN_REQUEST, payload: { email, password }}),
  logout: () => ({ type: types.LOGOUT })
}