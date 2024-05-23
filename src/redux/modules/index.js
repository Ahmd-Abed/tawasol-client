import { combineReducers } from "redux";
import users from "./users";
import alerts from "./alerts";
import profiles from "./profiles";
import posts from "./posts";

export default combineReducers({
    users,
    alerts,
    profiles,
    posts
}); ///bnejma3 kel lreducers ma3 ba3d