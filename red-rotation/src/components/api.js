export async function get({ params }) {
    try {
        const url = 'https://attendancesystemcc1.azurewebsites.net';

        const response = await fetch(url, {
            method: 'GET', // or 'POST', depending on your Azure Function
            headers: {
                // Add any required headers here
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        // Parse JSON response
        const data = await response.json();

        return {
            body: data
        };
    } catch (error) {
        return {
            status: 500,
            body: {
                error: 'There was an error calling the Azure Function'
            }
        };
    }
}
