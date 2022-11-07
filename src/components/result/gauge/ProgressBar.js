import React from 'react'

const ProgressBar = ({ percent }) => {

    const radius = 297
    const strokeWidth = radius * 0.14;
    const innerRadius = radius - (strokeWidth / 2);
    const circumference = innerRadius * 2 * Math.PI;
    const arc = circumference * (180 / 360);
    const dashArray = `${arc} ${circumference}`;
    const transform = `rotate(180, ${radius}, ${radius})`;
    const percentNormalized = Math.min(Math.max(percent, 0), 100);
    const offset = arc - (percentNormalized / 100) * arc;

    return (
        <>
            <circle
                className='gauge_base'
                cx={220}
                cy={210}
                fill="transparent"
                r={innerRadius}
                stroke="#F3F3F5"
                strokeDasharray={dashArray}
                strokeLinecap="round"
                strokeWidth={strokeWidth}
                transform={transform}>
            </circle>

            <circle
                className="gauge_percent"
                cx={220}
                cy={210}
                fill="transparent"
                r={innerRadius}
                stroke="#1088C3"
                strokeDasharray={dashArray}
                strokeDashoffset={offset}
                strokeLinecap="round"
                strokeWidth={strokeWidth}
                style={{
                    transition: "stroke-dashoffset 0.9s ease-out",
                }}
                transform={transform}
            />
        </>
    )
}

export default ProgressBar

