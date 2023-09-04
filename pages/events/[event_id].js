import { useRouter } from 'next/router';

function EventDetailPage(){
    const router = useRouter();
    console.log(router.query.event_id);

    return (
        <div>
            <h1>Showing Selected Event</h1>
        </div>
    );
}

export default EventDetailPage;