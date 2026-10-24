export async function logOut() {
    try {
        const response = await fetch('http://localhost:3000/logOut', {
            method: 'POST',
            credentials: 'include' 
        })
        if(!response.ok){
            throw new Error('HTTP error: ${response.status}');
        }
        window.location.reload()
    } catch (error) {
       console.error('Session request failed:', error);
    }
}