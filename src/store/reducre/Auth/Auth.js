
export const InitialState = {
  token:null,
  userId: null,
  email:null
};

export const Auth = (state = InitialState, action) => {
  switch (action.type) {
    case "Log_In":
      console.log(action.type, "reducer");
      return "Log_In";

    default:
      return state;
  }
};