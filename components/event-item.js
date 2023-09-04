import Link from 'next/link';

function EventItem(props){
    const { title, image, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <li>
            <img src='' alt='' />
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div>
                        <address>{address}</address>
                    </div>
                </div>
                <div>
                    <Link href='/'>Explore Event</Link>
                </div>
            </div>
        </li>
    );
}