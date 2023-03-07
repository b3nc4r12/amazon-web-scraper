import { adminDb } from "firebaseAdmin"
import type { NextApiRequest, NextApiResponse } from "next"
import * as admin from "firebase-admin"

type Data = {
    collection_id: string
    start_eta: number
}

type Error = {
    error: string
}

const activateScraper = async (
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>
) => {
    try {
        const { search } = req.body

        console.log("SEARCH IS >>>", search);

        const response = await fetch("https://api.brightdata.com/dca/trigger?collector=c_let6fulxtta0pgos2&queue_next=1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.BRIGHTDATA_API_KEY}`
            },
            body: JSON.stringify({ search })
        })

        const data = await response.json();
        console.log("DATA IS >>>", data);

        const { collection_id, start_eta } = data

        await adminDb
            .collection("searches")
            .doc(collection_id)
            .set({
                search,
                start_eta,
                status: "pending",
                updatedAt: admin.firestore.Timestamp.now()
            })

        return res.status(200).json({ collection_id, start_eta });
    } catch (error: any) {
        console.log("ERROR IS >>>", error);
        return res.status(500).json({ error: error.message });
    }
}

export default activateScraper