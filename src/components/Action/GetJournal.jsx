export const getEntry = (entryId) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`http://localhost:8080/journal/${entryId}`);
        if (response.ok) {
          const data = await response.json();
          dispatch({ type: 'GET_SELECTED_ENTRY', payload: data });
        } else {
          console.error('Error fetching selected entry:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching selected entry:', error);
      }
    };
};
  