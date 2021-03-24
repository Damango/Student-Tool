import React from 'react';
import "./BadgeCard.css"

const BadgeCard = (props) => {
    return (<div className="badge-card-container">{props.level}</div>);
}

export default BadgeCard;