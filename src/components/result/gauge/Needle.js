import React from 'react'

const Needle = ({percent}) => {

    return (
        <>
            <g id="needle"                 
                style={{
                    transform: `rotate(${percent * 1.8}deg)`,
                }}>
                <rect id="Rectangle 11" x="33.5" y="347.5" width="689" height="79" stroke="none" />
                <g id="base">
                    <circle id="Ellipse 79" cx="378" cy="387" r="38" fill="url(#paint0_linear_111_1827)" />
                    <circle id="Ellipse 80" cx="378" cy="387" r="32" fill="black" />
                </g>
                <g id="shadow">
                    <path fillRule="evenodd" clipRule="evenodd" d="M400.25 375.59C429.82 374.625 448.966 374 448.966 374V400C448.966 400 429.82 399.374 400.251 398.409C396.104 406.479 387.697 412 378 412C367.723 412 358.894 405.799 355.052 396.934C246.088 393.379 81.0596 388 79.9836 388C78.3765 387.999 78.3766 386 79.9836 386C81.0595 386 246.088 380.621 355.052 377.065C358.895 368.201 367.723 362 378 362C387.697 362 396.104 367.521 400.25 375.59Z" fill="url(#paint1_linear_111_1827)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M400.25 375.59C429.82 374.625 448.966 374 448.966 374V400C448.966 400 429.82 399.374 400.251 398.409C396.104 406.479 387.697 412 378 412C367.723 412 358.894 405.799 355.052 396.934C246.088 393.379 81.0596 388 79.9836 388C78.3765 387.999 78.3766 386 79.9836 386C81.0595 386 246.088 380.621 355.052 377.065C358.895 368.201 367.723 362 378 362C387.697 362 396.104 367.521 400.25 375.59Z" fill="url(#paint2_linear_111_1827)" fillOpacity="0.2" />
                </g>
                <path id="Union" fillRule="evenodd" clipRule="evenodd" d="M398.793 377.156L400.989 378.469L445.987 376.91L446.013 396.91L401.01 394.969L398.865 396.69C395.212 404.541 387.26 409.987 378.03 410C368.125 410.013 359.673 403.762 356.424 394.985L354.509 394.031L141.999 386.812L354.491 380.031L356.403 379.071C359.629 370.286 368.064 364.013 377.969 364C387.16 363.988 395.099 369.368 398.793 377.156Z" fill="#0080BF" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_111_1827" x1="373.979" y1="424.794" x2="382.027" y2="349.213" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#84BBD6" />
                    <stop offset="0.0001" stopColor="#84C7D6" />
                    <stop offset="0.1811" stopColor="#86C4E3" />
                    <stop offset="0.3879" stopColor="#88CCEE" />
                    <stop offset="0.5442" stopColor="#AEDFF7" />
                    <stop offset="0.6848" stopColor="#CCEEFF" />
                    <stop offset="0.84375" stopColor="#CCEEFF" />
                </linearGradient>
                <linearGradient id="paint1_linear_111_1827" x1="576.749" y1="362" x2="576.749" y2="412" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#52ADDB" />
                    <stop offset="1" stopColor="#11435C" />
                </linearGradient>
                <linearGradient id="paint2_linear_111_1827" x1="576.052" y1="362" x2="576.052" y2="412" gradientUnits="userSpaceOnUse">
                    <stop offset="0.171875" stopColor="#2286B8" />
                    <stop offset="0.828125" stopColor="#196287" />
                </linearGradient>
            </defs>
        </>
    )
}

export default Needle


