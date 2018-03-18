export const selectContact = data => ({
  type: 'SELECT_CONTACT',
  payload: data,
});

export const populateContacts = data => ({
  type: 'POPULATE_CONTACTS',
  payload: data,
});
