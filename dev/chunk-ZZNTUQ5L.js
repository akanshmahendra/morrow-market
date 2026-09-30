import {
  createAction,
  props
} from "./chunk-CU7B2LGP.js";

// src/app/store/auth.actions.ts
var login = createAction(
  "[Account] Login",
  props()
);
var loginSuccess = createAction(
  "[Account] Login Success",
  props()
);
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
//# debugId=656e0297-aebc-59b0-be15-f94db5433399
//# sourceMappingURL=chunk-ZZNTUQ5L.js.map
