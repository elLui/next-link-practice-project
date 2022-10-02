import Link from "next/link";
import styles from './event-item.module.css';


export default function EventItem (props) {

    const { id, title, location, date, image } = props;

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

        <li key={ props.id } className={ styles.item }>
            <img src={ '/' + image } alt={ title }/>
            <div className={ styles.content }>
                <div className={styles.summary}>
                    <h2>{ title }</h2>
                </div>
                <div className={styles.date}>
                    <time>{ readableDate }</time>
                </div>
                <div className={styles.address}>
                    <address>{ formattedAddress }</address>
                </div>
                <div className={styles.actions}>
                    <Link href={ exploreLink }>explore event</Link>
                </div>
            </div>

        </li>


    )
}