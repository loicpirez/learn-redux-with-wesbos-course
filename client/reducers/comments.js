// a reducer takes in two things :

// 1. the action (info about what happened)

// 2. copy of current state

function comments (state = [], action) {
  switch (action.type) {
    case 'addComment':
      console.log('ADD_COMMENTS')
      // return the updated state
      break
    case 'removeComment':
      console.log('REMOVE_COMMENTS')
      // return the updated state
      break
    default:
      return state
  }
  return state
}

export default comments
