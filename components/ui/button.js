import Link from "next/link";
import styles from './button.module.css';


export default function Button (props) {


    return (
        <Link href={ props.link }>
            {/* to pass the style down through <Link/> tag we need to wrap it in an anchor tag to prevent default behaviour */}
            {/* no href attribute should be added -  */}
            <a className={ styles.btn }>{ props.children }</a>
        </Link>

    )

}