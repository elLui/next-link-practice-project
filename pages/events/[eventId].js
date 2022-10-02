import {useRouter} from "next/router";
import { getEventById } from "../../dummy-data";


export default function EventDetailPage() {
    const router = useRouter();

    const eventId = router.query.eventID;
    const event = getEventById(eventId);

    if (!event) {
        return (
            <div>
                <h1>no event found</h1>
            </div>
        )
    }

    return (
        <h1>event detail page</h1>
    )
}