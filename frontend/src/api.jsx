export async function generateAI(prompt) {
    const res = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
}