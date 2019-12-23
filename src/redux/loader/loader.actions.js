
import * as constants from "../../constants/constants";

const {
  TOGGLE_LOADER,
  TOGGLE_LOADER_VIDEOS,
  TOGGLE_LOADER_CREDITS
} = constants;


export const toggleLoader = () => {
    return {
      type: TOGGLE_LOADER
    };
  };
  
  export const toggleLoaderVideos = () => {
    return {
      type: TOGGLE_LOADER_VIDEOS
    };
  };
  
  export const toggleLoaderCredits = () => {
    return {
      type: TOGGLE_LOADER_CREDITS
    };
  };