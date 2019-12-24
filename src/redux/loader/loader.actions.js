
import * as types from "./loader.types";

const {
  TOGGLE_LOADER,
  TOGGLE_LOADER_VIDEOS,
  TOGGLE_LOADER_CREDITS
} = types;


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