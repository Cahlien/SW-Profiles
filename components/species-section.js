import {Fragment, useEffect, useState} from "react";
import axios from "axios";

export default function SpeciesSection(props){
    const url = props.url;
    const [species, setSpecies] = useState();

    async function fetchSpeciesInformation(){
        const results = await axios.get(url);
        setSpecies(results);
    }

    useEffect(() => {
        if(!species && url){
            fetchSpeciesInformation();
        }
    })

    return (
      <Fragment>
          <h3 className={'mt-3'}>Species Details</h3>
          {species &&
          <div>
              <p><strong>Name: </strong>{species?.data?.name}</p>
              <p><strong>Classification: </strong>{species?.data?.classification}</p>
              <p><strong>Designation: </strong>{species?.data?.designation}</p>
              <p><strong>Language: </strong>{species?.data?.language}</p>
          </div>
          }
          {!species &&
          <div>
              <p><strong>Name: </strong>Not Listed</p>
              <p><strong>Classification: </strong>Not Listed</p>
              <p><strong>Designation: </strong>Not Listed</p>
              <p><strong>Language: </strong>Not Listed</p>
          </div>
          }
      </Fragment>
    );
}
