import styles from './event-item.module.css';
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";


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
                    <DateIcon/>
                    <time>{ readableDate }</time>
                </div>
                <div className={styles.address}>
                    <AddressIcon/>
                    <address>{ formattedAddress }</address>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink}>
                        <span>explore event</span>
                        <span className={styles.icon}><ArrowRightIcon/></span>
                    </Button>
                </div>
            </div>

        </li>


    )
}