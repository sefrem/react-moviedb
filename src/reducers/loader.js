const initialState = {
    general: false,
    videos: false,
    credits: false 
   }

const loader = (state = initialState, action) => {
    switch(action.type) {
      case "TOGGLE_LOADER":
        return toggleLoader(state);
      case "TOGGLE_LOADER_VIDEOS":
        return toggleLoaderVideos(state);
        case "TOGGLE_LOADER_CREDITS":
        return toggleLoaderCredits(state);
      default:
        return state;
    }
  }
  
  const toggleLoader = state => {
    return toggleLoaderState(state, 'general');
  }
  
  const toggleLoaderVideos = state => {
    return toggleLoaderState(state, 'videos');
  }
  
  const toggleLoaderCredits = state => {
    return toggleLoaderState(state, 'credits');
  }
  
  const toggleLoaderState = (state, loaderKey) => {
    return {
      ...state,
      [loaderKey]: !state[loaderKey]
    }
  }

  export default loader;