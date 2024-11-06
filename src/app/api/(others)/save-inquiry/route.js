export async function POST(request) {
    try {
        const body = await request.json();
        console.log(body)   
        // Make the POST request to the external API with the form data
        const response = await fetch('http://52.215.93.118/api/save-inquiry', {
            method: 'POST',
            headers: {
                'Content-Type': 'form-data',
            },
            body
        });

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'form-data',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
