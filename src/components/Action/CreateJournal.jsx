export const shareEntry = (title, content) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:8080/journal/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    content,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                dispatch({ type: 'CREATE_ENTRY_DATA', payload: data });
                console.log('Entry created successfully');
            } else {
                console.error('Error creating entry:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating entry:', error);
        }
    };
};
