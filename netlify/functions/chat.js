// Netlify serverless function — proxies chat requests to Anthropic Claude API
// Deploy: set ANTHROPIC_API_KEY in Netlify environment variables

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: corsHeaders(),
            body: '',
        };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers: corsHeaders(), body: 'Method Not Allowed' };
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
        return {
            statusCode: 500,
            headers: corsHeaders(),
            body: JSON.stringify({ error: 'API key not configured' }),
        };
    }

    try {
        const { system, messages } = JSON.parse(event.body);

        const response = await fetch(ANTHROPIC_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
            },
            body: JSON.stringify({
                model: 'claude-haiku-4-5-20251001',
                max_tokens: 300,
                system: system,
                messages: messages,
            }),
        });

        if (!response.ok) {
            const errText = await response.text();
            return {
                statusCode: response.status,
                headers: corsHeaders(),
                body: JSON.stringify({ error: `Anthropic API error: ${response.status}`, details: errText }),
            };
        }

        const data = await response.json();
        return {
            statusCode: 200,
            headers: corsHeaders(),
            body: JSON.stringify(data),
        };
    } catch (err) {
        return {
            statusCode: 500,
            headers: corsHeaders(),
            body: JSON.stringify({ error: err.message }),
        };
    }
};

function corsHeaders() {
    return {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json',
    };
}
