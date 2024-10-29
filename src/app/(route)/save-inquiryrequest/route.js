
export async function POST(request) {
    try {
        const body = await request.json();

        // Make the POST request to the external API with the form data
        const response = await fetch('http://52.215.93.118/save-inquiryrequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: new URLSearchParams(body),
        });

        const data = await response.json();
        console.log(data)

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
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
