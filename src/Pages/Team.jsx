import React from 'react';
import Card from '../Components/Card';
import { coreTeam } from '../Data/coreTeam';
import Background from '../Components/Background'
import Navbar from '../Components/Navebar';
import "../css/Team.css";

const Team = () => {
    return (
        <>
         <div style={{position:'sticky', zIndex: -1, height:"2vh"}}>
        <Background/>
        </div>
            <Navbar />
            <div className="team-container">
                <div className="team-content">
                    <div className="heading">Convenors</div>
                    <div className="mainContainer">
                        {coreTeam.Convenor.map((member) => (
                            <Card key={member.Name} Name={member.Name} Committee={member.Committee} Photo={member.Photo} />
                        ))}
                    </div>

                    <div className="heading">Discipline</div>
                    <div className="mainContainer">
                        {coreTeam.Discipline.map((member) => (
                            <Card key={member.Name} Name={member.Name} Committee={member.Committee} Photo={member.Photo} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;