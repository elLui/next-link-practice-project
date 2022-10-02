import Link from "next/link";

export default function EventItem (props) {

    const { id, title, description, location, date, image, isFeatured } = props;

    const readableDate = new Date (date).toLocaleDateString ('en-US', {
        day: "numeric",
        month: 'long',
        year: 'numeric',
    });

    // all address data us formatted with commas - just inserting linebreaks
    const formattedAddress = location.replace (', ', '\n');

    // template literal the id of link
    const exploreLink = `/events/${ id }`;


    return (

        <li key={ props.id }>
            <img src={ '/' + image } alt={ title }/>
            <div>
                <h2>{ title }</h2>
            </div>
            <div>
                <time>{ readableDate }</time>
            </div>
            <div>
                <address>{ formattedAddress }</address>
            </div>
            <div>
                <Link href={ "/" }>{ exploreLink }</Link>
            </div>

        </li>


    )
}