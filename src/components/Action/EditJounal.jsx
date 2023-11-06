export const editEntry = (entryId, shareTitle, shareContent) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:8080/journal/${entryId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: shareTitle,
                    content: shareContent,
                }),
            });

            if (response.ok) {
                dispatch({ type: 'EDIT_ENTRY_SUCCESS', payload: entryId });
            } else {
                console.error('Error editing entry:', response.statusText);
            }
        } catch (error) {
            console.error('Error editing entry:', error);
        }
    };
};
