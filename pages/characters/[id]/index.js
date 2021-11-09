import Head from 'next/head';
import Layout from '../../../components/layout';
import {useSelector} from "react-redux";
import {Fragment} from "react";
import {useRouter} from "next/router";
import AboutSection from "../../../components/about-section";
import SpeciesSection from "../../../components/species-section";
import StarshipsSection from "../../../components/starships-section";
import FilmAppearances from "../../../components/appearances-section";

export default function Index(){
    const characters = useSelector(state => state.characters.characters);
    const router = useRouter();
    const species = extractID(characters[router.query.id]?.species[0]);
    const starships = characters[router.query.id]?.starships.map(starship => extractID(starship));
    const films = characters[router.query.id]?.films.map(film => extractID(film));

    function extractID(url){
        if(url?.length > 2){
            const elements = url?.split('/');
            return elements[elements.length - 2];
        }
    }

    return (
        <Fragment>
            <Head>
                <title>Star Wars Profiles</title>
                <meta name="description" content="A website to view information about Star Wars characters."/>
                <link rel="icon" href={"/images/sw-profiles.png"}/>
            </Head>
            <Layout>
            {characters &&
                <div>
                    <h1 className={'text-center'}>{characters[router.query.id]?.name}</h1>
                    <div className={'row align-items-center'}>
                        <div className={'col-12 col-md-6'}>
                            <AboutSection character={characters[router.query.id]} />
                        </div>
                        <div className={'col-12 col-md-6'}>
                            <SpeciesSection speciesIndex={species} />
                        </div>
                    </div>
                    <div className="row">
                        <div className={'col-12 col-md-6'}>
                            <StarshipsSection starships={starships} />
                        </div>
                        <div className="col-12 col-md-6">
                            <FilmAppearances films={films} />
                        </div>
                    </div>
                </div>
            }
        </Layout>
        </Fragment>

    )
}
