import * as actions from "./Types/Types";

export const Log_In = (payload) => {
  console.log(actions);
  return {
    type: actions.Log_In,
    payload: payload,
  };
};