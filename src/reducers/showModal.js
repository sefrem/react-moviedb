
const showModal = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return toggle(state);
    default: 
      return state
    }
}

const toggle = state => {
    return !state
  }

export default showModal;