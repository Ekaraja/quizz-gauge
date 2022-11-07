import React from 'react'
import { ticks } from '../../../utils/ticks'
const Ticks = ({percent}) => {

    const tickFilled = "#1088C3";
    const tickEmpty = "#E2E2E2";

    const fillTicks = ticks.filter(tick => {
        return tick.id <= percent
    })

    return (
        <g id="ticks">
            <path id="tick_100" opacity="0.9" d="M729 385V389L689 388V386L729 385Z"fill={tickEmpty} />
            <path id="tick_99" opacity="0.9" d="M716.81 375.273L716.873 377.272L688.89 377.652L688.859 376.652L716.81 375.273Z"fill={tickEmpty} />
            <path id="tick_98" opacity="0.9" d="M716.303 364.557L716.429 366.553L688.458 367.811L688.396 366.813L716.303 364.557Z"fill={tickEmpty} />
            <path id="tick_97" opacity="0.9" d="M715.461 353.86L715.649 355.851L687.737 357.987L687.643 356.992L715.461 353.86Z"fill={tickEmpty} />
            <path id="tick_96" opacity="0.9" d="M714.288 343.193L714.539 345.177L686.684 348.192L686.558 347.2L714.288 343.193Z"fill={tickEmpty} />
            <path id="tick_95" opacity="0.9" d="M719.606 331.139L720.076 334.102L685.434 339.082L685.121 337.107L719.606 331.139Z"fill={tickEmpty} />
            <path id="tick_94" opacity="0.9" d="M710.941 321.993L711.315 323.958L683.659 328.724L683.472 327.742L710.941 321.993Z"fill={tickEmpty} />
            <path id="tick_93" opacity="0.9" d="M708.77 311.481L709.207 313.432L681.704 319.068L681.486 318.092L708.77 311.481Z"fill={tickEmpty} />
            <path id="tick_92" opacity="0.9" d="M706.278 301.038L706.775 302.975L679.445 309.476L679.196 308.508L706.278 301.038Z"fill={tickEmpty} />
            <path id="tick_91" opacity="0.9" d="M703.454 290.679L704.012 292.6L676.866 299.966L676.587 299.005L703.454 290.679Z"fill={tickEmpty} />
            <path id="tick_90" opacity="0.9" d="M711.341 276.101L712.577 279.905L674.25 291.307L673.631 289.404L711.341 276.101Z"fill={tickEmpty} />
            <path id="tick_89" opacity="0.9" d="M696.818 270.256L697.495 272.137L670.825 281.208L670.486 280.267L696.818 270.256Z"fill={tickEmpty} />
            <path id="tick_88" opacity="0.9" d="M693.032 260.205L693.769 262.064L667.349 271.987L666.981 271.057L693.032 260.205Z"fill={tickEmpty} />
            <path id="tick_87" opacity="0.9" d="M688.905 250.288L689.699 252.124L663.605 262.871L663.208 261.953L688.905 250.288Z"fill={tickEmpty} />
            <path id="tick_86" opacity="0.9" d="M684.484 240.498L685.335 242.308L659.55 253.889L659.125 252.984L684.484 240.498Z"fill={tickEmpty} />
            <path id="tick_85" opacity="0.9" d="M685.692 227.775L687.054 230.448L655.679 245.874L654.771 244.091L685.692 227.775Z"fill={tickEmpty} />
            <path id="tick_84" opacity="0.9" d="M674.744 221.348L675.708 223.101L650.618 236.323L650.136 235.447L674.744 221.348Z"fill={tickEmpty} />
            <path id="tick_83" opacity="0.9" d="M669.419 212.015L670.437 213.737L645.738 227.763L645.229 226.902L669.419 212.015Z"fill={tickEmpty} />
            <path id="tick_82" opacity="0.9" d="M663.794 202.859L664.865 204.548L640.603 219.353L640.067 218.509L663.794 202.859Z"fill={tickEmpty} />
            <path id="tick_81" opacity="0.9" d="M657.898 193.873L659.022 195.528L635.182 211.124L634.62 210.297L657.898 193.873Z"fill={tickEmpty} />
            <path id="tick_80" opacity="0.9" d="M660.754 178.005L663.105 181.241L630.16 203.941L628.984 202.323L660.754 178.005Z"fill={tickEmpty} />
            <path id="tick_79" opacity="0.9" d="M645.268 176.481L646.494 178.061L623.616 195.174L623.004 194.384L645.268 176.481Z"fill={tickEmpty} />
            <path id="tick_78" opacity="0.9" d="M638.554 168.085L639.829 169.626L617.457 187.485L616.82 186.714L638.554 168.085Z"fill={tickEmpty} />
            <path id="tick_77" opacity="0.9" d="M631.574 159.907L632.897 161.407L611.065 179.988L610.404 179.238L631.574 159.907Z"fill={tickEmpty} />
            <path id="tick_76" opacity="0.9" d="M624.339 151.953L625.708 153.411L604.437 172.699L603.753 171.97L624.339 151.953Z"fill={tickEmpty} />
            <path id="tick_75" opacity="0.9" d="M621.398 139.981L623.519 142.103L598.431 166.484L597.017 165.069L621.398 139.981Z"fill={tickEmpty} />
            <path id="tick_74" opacity="0.9" d="M609.15 136.727L610.608 138.096L590.509 158.77L589.78 158.085L609.15 136.727Z"fill={tickEmpty} />
            <path id="tick_73" opacity="0.9" d="M601.211 129.469L602.711 130.791L583.233 152.128L582.483 151.467L601.211 129.469Z"fill={tickEmpty} />
            <path id="tick_72" opacity="0.9" d="M593.036 122.476L594.577 123.75L575.742 145.734L574.971 145.096L593.036 122.476Z"fill={tickEmpty} />
            <path id="tick_71" opacity="0.9" d="M584.649 117.735L586.229 118.961L568.055 141.576L567.264 140.963L584.649 117.735Z"fill={tickEmpty} />
            <path id="tick_70" opacity="0.9" d="M582.324 100.305L585.56 102.656L561.244 134.423L559.626 133.247L582.324 100.305Z"fill={tickEmpty} />
            <path id="tick_69" opacity="0.9" d="M567.259 103.056L568.913 104.18L552.133 127.982L551.306 127.42L567.259 103.056Z"fill={tickEmpty} />
            <path id="tick_68" opacity="0.9" d="M558.267 97.139L559.956 98.2107L543.905 122.57L543.06 122.034L558.267 97.139Z"fill={tickEmpty} />
            <path id="tick_67" opacity="0.9" d="M549.1 91.4931L550.822 92.5112L535.511 117.418L534.65 116.909L549.1 91.4931Z"fill={tickEmpty} />
            <path id="tick_66" opacity="0.9" d="M539.756 86.1439L541.508 87.1074L526.962 112.53L526.085 112.048L539.756 86.1439Z"fill={tickEmpty} />
            <path id="tick_65" opacity="0.9" d="M533.155 76.2425L535.828 77.6045L519.497 108.555L517.715 107.647L533.155 76.2425Z"fill={tickEmpty} />
            <path id="tick_64" opacity="0.9" d="M520.572 76.3579L522.381 77.2095L509.413 103.594L508.509 103.168L520.572 76.3579Z"fill={tickEmpty} />
            <path id="tick_63" opacity="0.9" d="M510.756 71.9249L512.591 72.7192L500.44 99.5392L499.523 99.1421L510.756 71.9249Z"fill={tickEmpty} />
            <path id="tick_62" opacity="0.9" d="M500.806 67.7957L502.666 68.532L491.343 95.7736L490.413 95.4055L500.806 67.7957Z"fill={tickEmpty} />
            <path id="tick_61" opacity="0.9" d="M490.726 63.9956L492.608 64.6731L482.131 92.2985L481.19 91.9598L490.726 63.9956Z"fill={tickEmpty} />
            <path id="tick_60" opacity="0.9" d="M483.691 50.6277L487.495 51.8638L474.192 89.5703L472.29 88.9522L483.691 50.6277Z"fill={tickEmpty} />
            <path id="tick_59" opacity="0.9" d="M470.228 57.3595L472.149 57.9175L463.401 86.2349L462.441 85.956L470.228 57.3595Z"fill={tickEmpty} />
            <path id="tick_58" opacity="0.9" d="M459.831 54.5297L461.769 55.0271L453.901 83.6576L452.933 83.4089L459.831 54.5297Z"fill={tickEmpty} />
            <path id="tick_57" opacity="0.9" d="M449.351 52.0256L451.303 52.4619L444.327 81.376L443.351 81.1578L449.351 52.0256Z"fill={tickEmpty} />
            <path id="tick_56" opacity="0.9" d="M438.793 49.8726L440.757 50.2473L434.687 79.4019L433.704 79.2146L438.793 49.8726Z"fill={tickEmpty} />
            <path id="tick_55" opacity="0.9" d="M429.462 43.0224L432.425 43.4917L426.457 77.972L424.482 77.6591L429.462 43.0224Z"fill={tickEmpty} />
            <path id="tick_54" opacity="0.9" d="M417.499 46.5684L419.483 46.8191L415.244 76.382L414.252 76.2567L417.499 46.5684Z"fill={tickEmpty} />
            <path id="tick_53" opacity="0.9" d="M406.785 45.4173L408.776 45.6055L405.464 75.3237L404.469 75.2296L406.785 45.4173Z"fill={tickEmpty} />
            <path id="tick_52" opacity="0.9" d="M396.039 44.6171L398.035 44.7427L395.656 74.5821L394.658 74.5193L396.039 44.6171Z"fill={tickEmpty} />
            <path id="tick_51" opacity="0.9" d="M385.274 44.1408L387.273 44.2036L385.832 74.1398L384.832 74.1084L385.274 44.1408Z"fill={tickEmpty} />
            <path id="tick_50" opacity="0.9" d="M374.5 34H378.5L377.5 75H375.5L374.5 34Z"fill={tickEmpty} />
            <path id="tick_49" opacity="0.9" d="M363.727 44.2008L365.726 44.1379L366.169 74.16L365.17 74.1914L363.727 44.2008Z"fill={tickEmpty} />
            <path id="tick_48" opacity="0.9" d="M352.965 44.7367L354.961 44.6111L356.349 74.6423L355.351 74.7051L352.965 44.7367Z"fill={tickEmpty} />
            <path id="tick_47" opacity="0.9" d="M342.225 45.6113L344.216 45.4231L346.548 75.4122L345.553 75.5063L342.225 45.6113Z"fill={tickEmpty} />
            <path id="tick_46" opacity="0.9" d="M331.52 46.8422L333.504 46.5916L336.778 76.4945L335.786 76.6198L331.52 46.8422Z"fill={tickEmpty} />
            <path id="tick_45" opacity="0.9" d="M320.575 43.4886L323.538 43.0193L328.517 77.6548L326.542 77.9677L320.575 43.4886Z"fill={tickEmpty} />
            <path id="tick_44" opacity="0.9" d="M310.243 50.249L312.208 49.8743L317.364 79.5696L316.381 79.757L310.243 50.249Z"fill={tickEmpty} />
            <path id="tick_43" opacity="0.9" d="M299.701 52.4805L301.653 52.0442L307.743 81.5794L306.767 81.7976L299.701 52.4805Z"fill={tickEmpty} />
            <path id="tick_42" opacity="0.9" d="M289.232 55.0281L291.169 54.5308L298.192 83.8955L297.224 84.1442L289.232 55.0281Z"fill={tickEmpty} />
            <path id="tick_41" opacity="0.9" d="M278.852 57.9193L280.772 57.3613L288.715 86.4909L287.754 86.7699L278.852 57.9193Z"fill={tickEmpty} />
            <path id="tick_40" opacity="0.9" d="M265.496 51.8349L269.3 50.5989L280.706 88.9397L278.804 89.5577L265.496 51.8349Z"fill={tickEmpty} />
            <path id="tick_39" opacity="0.9" d="M258.392 64.6702L260.273 63.9927L270.036 92.5857L269.095 92.9244L258.392 64.6702Z"fill={tickEmpty} />
            <path id="tick_38" opacity="0.9" d="M248.339 68.5429L250.198 67.8066L260.857 96.0847L259.927 96.4528L248.339 68.5429Z"fill={tickEmpty} />
            <path id="tick_37" opacity="0.9" d="M238.405 72.7106L240.241 71.9163L251.794 99.8737L250.876 100.271L238.405 72.7106Z"fill={tickEmpty} />
            <path id="tick_36" opacity="0.9" d="M228.624 77.2205L230.434 76.3689L242.856 103.943L241.952 104.369L228.624 77.2205Z"fill={tickEmpty} />
            <path id="tick_35" opacity="0.9" d="M217.173 77.6076L219.846 76.2456L235.289 107.656L233.507 108.564L217.173 77.6076Z"fill={tickEmpty} />
            <path id="tick_34" opacity="0.9" d="M209.503 87.1278L211.255 86.1643L225.387 112.907L224.51 113.389L209.503 87.1278Z"fill={tickEmpty} />
            <path id="tick_33" opacity="0.9" d="M200.188 92.5281L201.91 91.51L216.869 117.788L216.009 118.297L200.188 92.5281Z"fill={tickEmpty} />
            <path id="tick_32" opacity="0.9" d="M191.045 98.2113L192.733 97.1396L208.522 122.951L207.677 123.487L191.045 98.2113Z"fill={tickEmpty} />
            <path id="tick_31" opacity="0.9" d="M182.103 104.204L183.757 103.08L200.326 128.349L199.498 128.911L182.103 104.204Z"fill={tickEmpty} />
            <path id="tick_30" opacity="0.9" d="M167.469 102.695L170.705 100.344L193.366 133.236L191.748 134.412L167.469 102.695Z"fill={tickEmpty} />
            <path id="tick_29" opacity="0.9" d="M164.804 117.004L166.384 115.778L184.474 139.915L183.684 140.528L164.804 117.004Z"fill={tickEmpty} />
            <path id="tick_28" opacity="0.9" d="M156.416 123.742L157.957 122.467L176.832 146.067L176.061 146.704L156.416 123.742Z"fill={tickEmpty} />
            <path id="tick_27" opacity="0.9" d="M148.287 130.789L149.787 129.467L169.389 152.457L168.639 153.118L148.287 130.789Z"fill={tickEmpty} />
            <path id="tick_26" opacity="0.9" d="M140.395 138.099L141.853 136.729L162.166 159.092L161.437 159.776L140.395 138.099Z"fill={tickEmpty} />
            <path id="tick_25" opacity="0.9" d="M129.475 142.097L131.597 139.976L155.977 165.063L154.563 166.478L129.475 142.097Z"fill={tickEmpty} />
            <path id="tick_24" opacity="0.9" d="M125.298 153.417L126.667 151.959L148.322 172.98L147.637 173.709L125.298 153.417Z"fill={tickEmpty} />
            <path id="tick_23" opacity="0.9" d="M118.093 161.399L119.416 159.899L141.732 180.24L141.071 180.99L118.093 161.399Z"fill={tickEmpty} />
            <path id="tick_22" opacity="0.9" d="M111.175 169.629L112.45 168.088L135.372 187.7L134.735 188.47L111.175 169.629Z"fill={tickEmpty} />
            <path id="tick_21" opacity="0.9" d="M104.498 178.055L105.724 176.474L129.673 195.684L129.06 196.475L104.498 178.055Z"fill={tickEmpty} />
            <path id="tick_20" opacity="0.9" d="M89.9037 181.248L92.2549 178.012L124.012 202.321L122.837 203.939L89.9037 181.248Z"fill={tickEmpty} />
            <path id="tick_19" opacity="0.9" d="M91.9833 195.531L93.1074 193.877L117.737 211.22L117.175 212.047L91.9833 195.531Z"fill={tickEmpty} />
            <path id="tick_18" opacity="0.9" d="M86.1232 204.54L87.1948 202.852L112.371 219.421L111.835 220.265L86.1232 204.54Z"fill={tickEmpty} />
            <path id="tick_17" opacity="0.9" d="M80.5649 213.738L81.583 212.016L107.249 227.776L106.74 228.637L80.5649 213.738Z"fill={tickEmpty} />
            <path id="tick_16" opacity="0.9" d="M75.2928 223.101L76.2563 221.348L102.401 236.292L101.919 237.168L75.2928 223.101Z"fill={tickEmpty} />
            <path id="tick_15" opacity="0.9" d="M65.932 230.441L67.2939 227.768L98.2471 244.101L97.3391 245.883L65.932 230.441Z"fill={tickEmpty} />
            <path id="tick_14" opacity="0.9" d="M65.6514 242.302L66.5029 240.492L93.5099 253.753L93.0841 254.658L65.6514 242.302Z"fill={tickEmpty} />
            <path id="tick_13" opacity="0.9" d="M61.3009 252.124L62.0952 250.288L89.4843 262.685L89.0872 263.603L61.3009 252.124Z"fill={tickEmpty} />
            <path id="tick_12" opacity="0.9" d="M57.2462 262.07L57.9824 260.21L85.7336 271.736L85.3654 272.665L57.2462 262.07Z"fill={tickEmpty} />
            <path id="tick_11" opacity="0.9" d="M53.5159 272.141L54.1934 270.26L82.2916 280.907L81.9529 281.848L53.5159 272.141Z"fill={tickEmpty} />
            <path id="tick_10" opacity="0.9" d="M40.4197 279.904L41.6558 276.1L79.3542 289.4L78.7361 291.302L40.4197 279.904Z"fill={tickEmpty} />
            <path id="tick_9" opacity="0.9" d="M46.9884 292.6L47.5464 290.679L76.2582 299.541L75.9792 300.502L46.9884 292.6Z"fill={tickEmpty} />
            <path id="tick_8" opacity="0.9" d="M44.2263 302.976L44.7236 301.039L73.6871 308.991L73.4384 309.96L44.2263 302.976Z"fill={tickEmpty} />
            <path id="tick_7" opacity="0.9" d="M41.7903 313.432L42.2266 311.48L71.4085 318.515L71.1904 319.491L41.7903 313.432Z"fill={tickEmpty} />
            <path id="tick_6" opacity="0.9" d="M39.6882 323.959L40.063 321.994L69.4407 328.107L69.2533 329.09L39.6882 323.959Z"fill={tickEmpty} />
            <path id="tick_5" opacity="0.9" d="M32.9296 334.102L33.3989 331.139L67.8744 337.106L67.5616 339.081L32.9296 334.102Z"fill={tickEmpty} />
            <path id="tick_4" opacity="0.9" d="M36.4632 345.178L36.7139 343.193L66.4146 347.449L66.2893 348.442L36.4632 345.178Z"fill={tickEmpty} />
            <path id="tick_3" opacity="0.9" d="M35.3616 355.852L35.5498 353.861L65.3518 357.18L65.2577 358.176L35.3616 355.852Z"fill={tickEmpty} />
            <path id="tick_2" opacity="0.9" d="M34.5668 366.552L34.6924 364.556L64.5941 366.939L64.5313 367.937L34.5668 366.552Z"fill={tickEmpty} />
            <path id="tick_1" opacity="0.9" d="M34.1374 377.273L34.2002 375.274L64.1697 376.716L64.1383 377.715L34.1374 377.273Z"fill={tickEmpty} />
            <path id="tick_0" opacity="0.9" d="M24 389V385L64 386V388L24 389Z"fill={tickEmpty} />
            {fillTicks.map((tick, index) => {
                return <path key={index} id={tick.id} opacity={tick.opacity} d={tick.d} fill={tickFilled} ></path>
            })}
        </g>
    )
}

export default Ticks