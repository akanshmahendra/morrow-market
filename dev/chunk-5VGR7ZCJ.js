import {
  createAction,
  props
} from "./chunk-5QH7RXCL.js";

// src/app/store/auth.actions.ts
var login = createAction(
  "[Account] Login",
  props()
);
var loginSuccess = createAction("[Account] Login Success", props());
var loginFailure = createAction("[Account] Login Failure", props());
var logout = createAction("[Account] Logout");
var restoreSession = createAction("[Account] Restore Session");
var restoreSessionSuccess = createAction(
  "[Account] Restore Session Success",
  props()
);

export {
  login,
  loginSuccess,
  loginFailure,
  logout,
  restoreSession,
  restoreSessionSuccess
};
//# debugId=81d472cd-64cd-5875-8265-1db9ecb9b9ef
//# sourceMappingURL=chunk-5VGR7ZCJ.js.map
