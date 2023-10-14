import React from 'react';

function TeamMember({ member }) {
    return (
        <div className="person">
            <div className="team-image-container">
                <img src={`/assets/img/enormt/team/${member.id}.png`} alt={`Team Member ${member.name}`} />
            </div>
            <p className="name text-dark fs-6 fw-bold">{member.name}</p>
            <p className="position fs-6">{member.position}</p>
        </div>
    );
}

export default TeamMember;
