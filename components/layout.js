import styles from './layout.module.css';
import {Fragment} from "react";
import {Image} from "react-bootstrap";
import Link from 'next/link';
import CharacterSearch from "./character-search";

export default function Layout(props) {
    return (
        <Fragment>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link href={'/'}>
                            <a className="navbar-brand"><Image src={'/images/sw-profiles.png'}
                                                               alt={'Death Star icon by Jonathan Rey'}/></a>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className={"navbar-toggler-icon"}/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link href={'/'}>
                                        <a className="nav-link active" aria-current="page">Home</a>
                                    </Link>
                                </li>
                            </ul>
                            <CharacterSearch/>
                        </div>
                    </div>
                </nav>
            </header>
            <div className={styles.container}>
                {props.children}
            </div>
        </Fragment>
    );
}
