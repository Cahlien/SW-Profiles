import Head from 'next/head';
import {Fragment} from "react";
import Layout from "../components/layout";
import CharacterList from "../components/character-list";
import {useSelector} from "react-redux";

export default function Home() {
    const characters = useSelector(state => state.characters.characters);

    return (
        <Fragment>
            <Head>
                <title>Star Wars Profiles</title>
                <meta name="description" content="A website to view information about Star Wars characters."/>
                <link rel="icon" href={"/images/sw-profiles.png"}/>
            </Head>
            <Layout>
                <main className={'styles.container'}>
                    <div className={'text-center'}>
                        <h1>Star Wars Profiles</h1>
                    </div>
                    <hr />
                    <p>
                        Welcome to the Star Wars Profiles page, where you can find the hard facts about the most
                        interesting Star Wars characters!  Here are some instructions to help you get started:
                    </p>
                    <ol>
                        <li>Find the search bar in the upper right corner</li>
                        <li>Enter the name of a Star Wars character (e.g. Darth Vader)</li>
                        <li>Click on the search button to produce a list of matching characters</li>
                        <li>Find the Details column of the list and click the View button</li>
                    </ol>
                    { characters !== undefined && characters.length > 0 &&
                        <CharacterList/>
                    }
                </main>
            </Layout>
        </Fragment>

    )
}
