export const listEntries = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:8080/journal/list`);
            if (response.ok) {
                const data = await response.json();
                dispatch({ type: 'LIST_ENTRIES_SUCCESS', payload: data });
            } else {
                console.error('Error fetching entries. Response status:', response.status);
                console.error('Response text:', await response.text());
            }
        } catch (error) {
            console.error('Error fetching entries:', error);
        }
    };
};
