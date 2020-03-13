import React from 'react';
import { useFetchData } from '../hooks/useFetchData';
import styled from 'styled-components';

const NewDiv = styled.div`
    border: 1px solid grey;
    width: 40%;
    margin: 1%;
`;
const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const WorldCupTeams = () => {

const [data] = useFetchData('https://worldcup.sfg.io/teams')


    return (
        <WrapperDiv>
           {data.map(elem => (
               <NewDiv key={elem.id}>
                <h1>Country: {elem.country}</h1>
                <h2>FIFA Code: {elem.fifa_code}</h2>
                <h3>Group ID: {elem.group_id}</h3>
                <h3>Group Letter: {elem.group_letter}</h3>
               </NewDiv>
           ))}
            
        </WrapperDiv>
    );
};

export default WorldCupTeams;