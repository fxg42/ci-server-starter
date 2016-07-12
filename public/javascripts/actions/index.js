import { findAll } from '../api/projects'

export const incrementCounter = (incValue) => {
  return { type: 'INCREMENT', value: incValue }
}

export const decrementCounter = () => {
  return { type: 'DECREMENT' }
}

export const findAllProjects = () => async (dispatch) => {
  try {
    const resp = await findAll()
    dispatch({
      type:'FIND_ALL_PROJECTS_SUCCESS',
      projects: resp.data,
    })
  } catch (e) {
    dispatch({ type:'FIND_ALL_PROJECTS_ERROR' })
  }
}
