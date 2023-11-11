export const deleteEntry = (entryId) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:8080/journal/${entryId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                dispatch({ type: 'DELETE_ENTRY_SUCCESS', payload: entryId });
                window.location.reload();
            } else {
                console.error('Error deleting entry:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting entry:', error);
        }
    };
};
