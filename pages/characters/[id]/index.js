import Head from 'next/head';
import Layout from '../../../components/layout';
import {useSelector} from "react-redux";
import {Fragment} from "react";
import {useRouter} from "next/router";

export default function Index(){
    const characters = useSelector(state => state.characters.characters);
    const router = useRouter();

    return (
        <Fragment>
            <Head>
                <title>Star Wars Profiles</title>
                <meta name="description" content="A website to view information about Star Wars characters."/>
                <link rel="icon" href={"/images/sw-profiles.png"}/>
            </Head>
            <Layout>
            {characters &&
            <h2>{characters[router.query.id]?.name}</h2>
            }
        </Layout>
        </Fragment>

    )
}
