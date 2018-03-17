const contacts = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_CONTACT':
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default contacts;
