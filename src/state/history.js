import createHistory from 'history/createBrowserHistory'

const history = createHistory()

export default history

export const redirect = location => setTimeout(() => history.push(location), 0)

// FIND OUT WHATS GOING ON HERE....
