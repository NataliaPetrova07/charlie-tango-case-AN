

export default async function handler(req, res) {
    //res.status(200).json({ name: "GOOD TO GO" })
    const response = await fetch(
        "https://xlhxhxzqwspewrarsptk.supabase.co/rest/v1/sellers_info",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                apikey: process.env.SUPABASE_KEY,
                Prefer: "return=representation",
            },
            body: JSON.stringify(req.body)
        }

    ).then((res) => res.json());
    /* console.log({ response }); */
    return res.status(200).json({ response });
}