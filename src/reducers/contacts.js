const contacts = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_CONTACT':
      return {
        ...state,
        contact: action.payload,
      };
    case 'POPULATE_CONTACTS':
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};

export default contacts;
