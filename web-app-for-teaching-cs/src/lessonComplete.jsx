export async function lessonComplete(lessonTitle, whatSubjectType) {
    try {
        const response = await fetch('http://localhost:3000/lessonComplete', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({lessonTitle, whatSubjectType})
        })
        if(!response.ok){
            throw new Error('HTTP error: ${response.status}')
        }
    } catch (error) {
        console.error('Session request failed:', error);
    }
} 