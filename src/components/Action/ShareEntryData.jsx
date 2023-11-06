export const shareEntryData = (data) => {
  return {
    type: 'NEW_ENTRY_DATA',
    payload: data,
  };
};