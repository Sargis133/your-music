
function Icons(props) {
    return (
        <span className="icon-span">
            {props.name === "facebook" &&
                <svg fill="#ffffff" width={props.width} height={props.height} className={props.class} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                    </g>
                </svg>
            }
            {props.name === 'pinterest' &&
                <svg viewBox="0 0 20 20" width={props.width} height={props.height} className={props.class} version="1.1" xmlns="http://www.w3.org/2000/svg"
                      fill="#ffffff">
                    <g id="SVGRepo_bgCarrier" strokeWidth={"0"}></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap={"round"} strokeLinejoin={"round"}></g>
                    <g id="SVGRepo_iconCarrier">
                        <g id="Page-1" stroke="none" strokeWidth={"1"} fillRule={"evenodd"}>
                            <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -7399.000000)"
                               >
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path
                                        d="M173.876,7239 C168.399,7239 164,7243.43481 164,7248.95866 C164,7253.05869 166.407,7256.48916 169.893,7258.07936 C169.893,7256.21186 169.88,7256.45286 171.303,7250.38046 C170.521,7248.80236 171.129,7246.19673 172.88,7246.19673 C175.31,7246.19673 173.659,7249.79964 173.378,7251.2174 C173.129,7252.30544 173.959,7253.14238 174.955,7253.14238 C176.864,7253.14238 178.108,7250.71524 178.108,7247.87063 C178.108,7245.69456 176.615,7244.10437 174.042,7244.10437 C169.467,7244.10437 168.307,7249.19966 169.893,7250.79893 C170.292,7251.40294 169.893,7251.43118 169.893,7252.22174 C169.616,7253.05768 167.403,7251.84259 167.403,7248.70757 C167.403,7245.86195 169.727,7242.51518 174.457,7242.51518 C178.191,7242.51518 180.681,7245.27609 180.681,7248.2054 C180.681,7252.13805 178.523,7254.98366 175.37,7254.98366 C174.291,7254.98366 173.295,7254.3978 172.963,7253.72824 C172.36,7256.07371 172.238,7257.26258 171.303,7258.58153 C172.216,7258.83261 173.129,7259 174.125,7259 C179.602,7259 184,7254.56519 184,7249.04235 C183.752,7243.43481 179.353,7239 173.876,7239"
                                        id="pinterest-[#ffffff]"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            }
            {props.name === "twitter" &&
                <svg viewBox="0 -2 20 20" width={props.width} height={props.height} className={props.class} version="1.1" xmlns="http://www.w3.org/2000/svg"
                      fill="#ffffff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap={"round"} strokeLinejoin={"round"}></g>
                    <g id="SVGRepo_iconCarrier">
                        <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                            <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)"
                               >
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path
                                        d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                                        id="twitter-[#ffffff]"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>

            }
            {props.name === "dribbble" &&
                <svg viewBox="0 0 24 24" width={props.width} height={props.height} className={props.class} strokeWidth={2} fill="none" stroke="#FFF" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                     >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier"  strokeLinecap={"round"} strokeLinejoin={"round"}></g>
                    <g id="SVGRepo_iconCarrier">
                        <circle className="cls-1" cx="12" cy="12" r="10.5"></circle>
                        <path className="cls-1"
                              d="M8.12,2.24A32.47,32.47,0,0,1,12.8,9.13a33.23,33.23,0,0,1,1.58,3.56,36.16,36.16,0,0,1,2.15,8.79"></path>
                        <path className="cls-1" d="M19.67,4.82A18.16,18.16,0,0,1,12.8,9.13,28,28,0,0,1,1.55,11"></path>
                        <path className="cls-1" d="M22.42,13.21a16.66,16.66,0,0,0-8-.52A13,13,0,0,0,5.09,19.9"></path>
                    </g>
                </svg>
            }
            {
                props.name === "behance" &&
                <svg viewBox="0 0 24 24" width={props.width} height={props.height} className={props.class} fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2.5 19C1.67157 19 1 18.3284 1 17.5V6.5C1 5.67157 1.67157 5 2.5 5H8C13 5 13 11.5 10 11.5C13 11.5 14 19 8 19H2.5ZM4.5 11C4.22386 11 4 10.7761 4 10.5V7.5C4 7.22386 4.22386 7 4.5 7H7C7 7 9 7 9 9C9 11 7 11 7 11H4.5ZM4.5 13C4.22386 13 4 13.2239 4 13.5V16.5C4 16.7761 4.22386 17 4.5 17H8C8 17 9.5 17 9.5 15C9.5 13 8 13 8 13H4.5Z"
                              ></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M21.499 14.0034C22.3279 14.0034 23.0212 13.3199 22.8522 12.5085C21.6065 6.52886 12.9128 7.08088 13 14.0034C13.0665 19.2762 20.4344 20.9671 22.6038 16.1898C22.9485 15.4308 22.1747 14.9997 21.5372 14.9997C20.9706 14.9997 20.5313 15.5223 20.1693 15.9582C19.1272 17.2132 15.9628 17.1221 15.5449 14.5142C15.5005 14.2375 15.7304 14.0034 16.0106 14.0034H21.499ZM15.8184 11.9997C15.671 11.9997 15.5758 11.8453 15.6545 11.7207C16.7141 10.0424 19.2614 10.0605 20.3398 11.7189C20.4207 11.8434 20.3257 11.9997 20.1772 11.9997H15.8184Z"
                              ></path>
                        <path
                            d="M16 6C15.4477 6 15 6.44772 15 7C15 7.55228 15.4477 8 16 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H16Z"
                            ></path>
                    </g>
                </svg>
            }
            {
                props.name === "play" &&
                <svg viewBox="-3 0 28 28" width={props.width} height={props.height} version="1.1" xmlns="http://www.w3.org/2000/svg"
                     fill="#fff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd"
                           >
                            <g id="Icon-Set-Filled"
                               transform="translate(-419.000000, -571.000000)" fill="#ffffff">
                                <path
                                    d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554"
                                    id="play" ></path>
                            </g>
                        </g>
                    </g>
                </svg>
            }
            {
                props.name === "pause" &&
                <svg viewBox="-0.5 0 25 25" width={props.width} height={props.height} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M10 6.42004C10 4.76319 8.65685 3.42004 7 3.42004C5.34315 3.42004 4 4.76319 4 6.42004V18.42C4 20.0769 5.34315 21.42 7 21.42C8.65685 21.42 10 20.0769 10 18.42V6.42004Z"
                            stroke="#616161" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path
                            d="M20 6.42004C20 4.76319 18.6569 3.42004 17 3.42004C15.3431 3.42004 14 4.76319 14 6.42004V18.42C14 20.0769 15.3431 21.42 17 21.42C18.6569 21.42 20 20.0769 20 18.42V6.42004Z"
                            stroke="#616161" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                </svg>
            }
            {
                props.name === "voice" &&
                <svg viewBox="-2 0 32 32" width={props.width} height={props.height} version="1.1" xmlns="http://www.w3.org/2000/svg"
                     fill="#000000">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g id="icomoon-ignore"></g>
                        <path
                            d="M13.635 5.274l-7.686 6.127h-5.949v4.742l-0.004 0.003 0.004 0.003v4.693h5.98l7.656 6.008v-6.008h0.002v-9.441h-0.002v-6.127h0zM12.588 19.794h-0.002v4.9l-6.244-4.9h-5.293v-7.343h5.267l6.271-4.999v3.95l0.002 1.049v7.343h0z"
                            fill="#000000"></path>
                        <path
                            d="M16.087 10.729c1.141 1.521 1.745 3.333 1.745 5.241 0 1.948-0.627 3.791-1.812 5.33l0.832 0.64c1.328-1.724 2.029-3.788 2.029-5.97 0-2.137-0.676-4.167-1.955-5.87l-0.839 0.63z"
                            fill="#000000"></path>
                        <path
                            d="M20.313 6.927l-0.809 0.668c1.971 2.387 3.057 5.41 3.057 8.512 0 3.066-1.009 5.949-2.917 8.339l0.821 0.655c2.057-2.578 3.145-5.687 3.145-8.994 0-3.346-1.171-6.606-3.297-9.18z"
                            fill="#000000"></path>
                        <path
                            d="M23.578 3.521l-0.787 0.693c2.893 3.285 4.486 7.51 4.486 11.897 0 4.298-1.538 8.458-4.329 11.715l0.796 0.682c2.956-3.446 4.582-7.849 4.582-12.397-0-4.642-1.686-9.113-4.748-12.59z"
                            fill="#000000"></path>
                    </g>
                </svg>
            }
            {
                props.name === 'mute' &&
                <svg viewBox="-4 0 32 32" width={props.width} height={props.height} version="1.1" xmlns="http://www.w3.org/2000/svg"
                     fill="#000000">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g id="icomoon-ignore"></g>
                        <path
                            d="M24.3 4.592l-0.742-0.742-7.142 7.143v-5.822l-7.687 6.127h-5.949v4.743l-0.003 0.003 0.003 0.003v4.693h3.889l-6.668 6.668 0.742 0.742 7.41-7.41h0.027l1.003-1.002-0.015-0.012 6.202-6.202v0.027l1.049-1.049v-0.027l7.883-7.883zM3.828 19.691v-7.343h5.268l6.271-4.998v3.949l0.001 0.743-7.65 7.649h-3.889z"
                            fill="#000000"></path>
                        <path
                            d="M15.368 19.691h-0.001v4.901l-5.355-4.202-0.747 0.747 7.151 5.611v-6.008h0.001v-6.755l-1.049 1.049z"
                            fill="#000000"></path>
                    </g>
                </svg>
            }
            {
                props.name === "close" &&
                <svg viewBox="0 0 24 24" fill="none" width={props.width} height={props.height}>
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z"
                            fill="#0F0F0F"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                              fill="#0F0F0F"></path>
                    </g>
                </svg>
            }
            {
                props.name === "burger" &&
                <svg viewBox="0 0 24 24" width={props.width} height={props.height} stroke="#fff" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M2 18L20 18"  strokeWidth="2" strokeLinecap="round"></path>
                        <path d="M8 12L20 12"  strokeWidth="2" strokeLinecap="round"></path>
                        <path d="M0 6L20 6"  strokeWidth="2" strokeLinecap="round"></path>
                    </g>
                </svg>
            }
            {
                props.name === "home" &&
                <svg viewBox="0 0 16 16" width={props.width} height={props.height} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
                              ></path>
                    </g>
                </svg>
            }
            {
                props.name === "users" &&
                <svg viewBox="0 -0.5 25 25" width={props.width} height={props.height} fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M14.875 7.375C14.875 8.68668 13.8117 9.75 12.5 9.75C11.1883 9.75 10.125 8.68668 10.125 7.375C10.125 6.06332 11.1883 5 12.5 5C13.8117 5 14.875 6.06332 14.875 7.375Z"
                              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M17.25 15.775C17.25 17.575 15.123 19.042 12.5 19.042C9.877 19.042 7.75 17.579 7.75 15.775C7.75 13.971 9.877 12.509 12.5 12.509C15.123 12.509 17.25 13.971 17.25 15.775Z"
                              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M19.9 9.55301C19.9101 10.1315 19.5695 10.6588 19.0379 10.8872C18.5063 11.1157 17.8893 11 17.4765 10.5945C17.0638 10.189 16.9372 9.57418 17.1562 9.03861C17.3753 8.50305 17.8964 8.1531 18.475 8.15301C19.255 8.14635 19.8928 8.77301 19.9 9.55301V9.55301Z"
                              stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M5.10001 9.55301C5.08986 10.1315 5.43054 10.6588 5.96214 10.8872C6.49375 11.1157 7.11072 11 7.52347 10.5945C7.93621 10.189 8.06278 9.57418 7.84376 9.03861C7.62475 8.50305 7.10363 8.1531 6.52501 8.15301C5.74501 8.14635 5.10716 8.77301 5.10001 9.55301Z"
                              stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path
                            d="M19.2169 17.362C18.8043 17.325 18.4399 17.6295 18.403 18.0421C18.366 18.4547 18.6705 18.8191 19.0831 18.856L19.2169 17.362ZM22 15.775L22.7455 15.8567C22.7515 15.8023 22.7515 15.7474 22.7455 15.693L22 15.775ZM19.0831 12.695C18.6705 12.7319 18.366 13.0963 18.403 13.5089C18.4399 13.9215 18.8044 14.226 19.2169 14.189L19.0831 12.695ZM5.91689 18.856C6.32945 18.8191 6.63395 18.4547 6.59701 18.0421C6.56007 17.6295 6.19567 17.325 5.78311 17.362L5.91689 18.856ZM3 15.775L2.25449 15.693C2.24851 15.7474 2.2485 15.8023 2.25446 15.8567L3 15.775ZM5.78308 14.189C6.19564 14.226 6.56005 13.9215 6.59701 13.5089C6.63397 13.0963 6.32948 12.7319 5.91692 12.695L5.78308 14.189ZM19.0831 18.856C20.9169 19.0202 22.545 17.6869 22.7455 15.8567L21.2545 15.6933C21.1429 16.7115 20.2371 17.4533 19.2169 17.362L19.0831 18.856ZM22.7455 15.693C22.5444 13.8633 20.9165 12.5307 19.0831 12.695L19.2169 14.189C20.2369 14.0976 21.1426 14.839 21.2545 15.8569L22.7455 15.693ZM5.78311 17.362C4.76287 17.4533 3.85709 16.7115 3.74554 15.6933L2.25446 15.8567C2.45496 17.6869 4.08306 19.0202 5.91689 18.856L5.78311 17.362ZM3.74551 15.8569C3.85742 14.839 4.76309 14.0976 5.78308 14.189L5.91692 12.695C4.08354 12.5307 2.45564 13.8633 2.25449 15.693L3.74551 15.8569Z"
                            fill="currentColor" strokeWidth={0}></path>
                    </g>
                </svg>
            }
            {
                props.name === 'logout' &&
                <svg viewBox="0 0 24 24" width={props.width} height={props.height} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M21 12L13 12" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"></path>
                        <path d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
                              stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path
                            d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
                            stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                </svg>
            }
            {
                props.name === "event" &&
                <svg stroke="currentColor" width={props.width} height={props.height} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                        d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
                </svg>
            }
            {
                props.name === "plus" &&
                <svg stroke="currentColor" width={props.width} height={props.height} fill="green" strokeWidth="0" viewBox="0 0 512 512"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm90.5 224H272v74.5c0 8.8-7.2 16-16 16-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3V272h-74.5c-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3 0-8.8 7.2-16 16-16H240v-74.5c0-8.8 7.2-16 16-16s16 7.2 16 16V240h74.5c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
                </svg>
            }
            {
                props.name === 'edit' &&
                <svg version="1.1" id="Layer_1" width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.001 512.001"
                     fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <path fill="#FFBD42"
                                                       d="M33.052,356.136l-0.822,0.822l0,0L0.613,485.716c-1.77,7.209,0.355,14.819,5.604,20.068 l88.242-88.242L33.052,356.136z"></path>
                        <path fill="#30767A"
                              d="M502.599,86.817L425.182,9.402c-12.536-12.536-32.86-12.536-45.396,0L311.18,78.008l-10.078,10.078 L32.23,356.957l0,0L0.613,485.716c-1.77,7.209,0.355,14.819,5.604,20.068c5.249,5.249,12.858,7.374,20.068,5.604l128.759-31.617l0,0 l268.873-268.873l10.078-10.078l68.606-68.606C515.135,119.677,515.135,99.353,502.599,86.817z"></path>
                        <path fill="#007066"
                              d="M425.182,9.402c-12.536-12.536-32.86-12.536-45.396,0L311.18,78.008l-10.078,10.078L32.23,356.957 l0,0L0.613,485.716c-1.77,7.209,0.355,14.819,5.604,20.068L463.891,48.11L425.182,9.402z"></path>
                        <path fill="#4AB6BF"
                              d="M425.182,9.402c-12.536-12.536-32.86-12.536-45.396,0L311.18,78.008l-10.078,10.078L32.23,356.957 l0,0L0.613,485.716c-1.77,7.209,0.355,14.819,5.604,20.068L463.891,48.11L425.182,9.402z"></path>
                        <path fill="#940009"
                              d="M466.265,168.547l36.334-36.334c12.536-12.536,12.536-32.86,0-45.396L425.182,9.402 c-12.536-12.536-32.86-12.536-45.396,0l-36.334,36.334L466.265,168.547z"></path>
                        <path fill="#FF0029"
                              d="M463.891,48.11L425.182,9.402c-12.536-12.536-32.86-12.536-45.396,0l-36.334,36.334l61.407,61.407 L463.891,48.11z"></path>
                        <path fill="#F7DC4D"
                              d="M33.052,356.136l-0.822,0.822l0,0L0.613,485.716c-1.77,7.209,0.355,14.819,5.604,20.068 c5.249,5.249,12.858,7.374,20.068,5.604l128.759-31.617l0,0l0.822-0.822L33.052,356.136z"></path>
                        <rect x="297.713" y="90.415" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 566.3668 489.469)"
                              fill="#FF9800" width="173.685" height="74.042"></rect>
                        <polygon fill="#F7DC4D"
                                 points="410.735,101.265 349.328,39.86 311.18,78.007 301.103,88.085 296.972,92.217 358.378,153.622 "></polygon>
                        <path fill="#2D2B27"
                              d="M11.138,442.855l-10.524,42.86c-1.77,7.209,0.355,14.819,5.604,20.068 c5.249,5.249,12.858,7.374,20.068,5.604l42.86-10.525L11.138,442.855z"></path>
                        <path fill="#403E3B"
                              d="M11.138,442.855l-10.524,42.86c-1.77,7.209,0.355,14.819,5.604,20.068l33.925-33.925L11.138,442.855z "></path> </g></svg>
            }
            {
                props.name === "trash" &&
                <svg version="1.1" id="Layer_1" width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                     fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <rect x="104.923" y="191.732" fill="#e60000" width="302.163"
                                                       height="304.524"></rect>
                        <g> <path fill="#171717"
                                  d="M180.066,413.377c-8.69,0-15.738-7.047-15.738-15.738V296.918c0-8.69,7.047-15.738,15.738-15.738 s15.738,7.047,15.738,15.738v100.721C195.803,406.329,188.756,413.377,180.066,413.377z"></path>
                            <path fill="#171717"
                                  d="M256,413.377c-8.69,0-15.738-7.047-15.738-15.738V296.918c0-8.69,7.047-15.738,15.738-15.738 c8.69,0,15.738,7.047,15.738,15.738v100.721C271.738,406.329,264.69,413.377,256,413.377z"></path>
                            <path fill="#171717"
                                  d="M331.934,413.377c-8.69,0-15.738-7.047-15.738-15.738V296.918c0-8.69,7.047-15.738,15.738-15.738 s15.738,7.047,15.738,15.738v100.721C347.672,406.329,340.625,413.377,331.934,413.377z"></path>
                            <path fill="#171717"
                                  d="M395.935,73.706c-8.69,0-15.738,7.047-15.738,15.738s7.047,15.738,15.738,15.738 c18.295,0,33.18,14.885,33.18,33.18v37.64H407.08H104.92H82.886v-37.64c0-18.295,14.885-33.18,33.18-33.18h163.541 c8.69,0,15.738-7.047,15.738-15.738s-7.047-15.738-15.738-15.738h-92.852v-42.23h138.492v57.968c0,8.69,7.047,15.738,15.738,15.738 s15.738-7.047,15.738-15.738V15.738c0-8.69-7.047-15.738-15.738-15.738H171.017c-8.69,0-15.738,7.047-15.738,15.738v57.968h-39.214 c-35.651,0-64.655,29.005-64.655,64.655v53.377c0,8.69,7.047,15.738,15.738,15.738h22.034v288.786 c0,8.69,7.047,15.738,15.738,15.738h302.16c8.69,0,15.738-7.047,15.738-15.738V207.476h22.034c8.69,0,15.738-7.047,15.738-15.738 v-53.377C460.59,102.71,431.585,73.706,395.935,73.706z M391.342,480.525H120.658V207.476h270.685V480.525z"></path> </g> </g></svg>
            }
            {
                props.name === "earth" &&
                <svg version="1.1" id="_x32_" width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                     fill="currentColor" stroke="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g> <path className="st0"
                                  d="M463.203,105.688c-3.047-4.25-6.234-8.406-9.609-12.484C406.641,36.313,335.531,0,256,0 C176.484,0,105.359,36.313,58.406,93.203c-3.375,4.078-6.563,8.234-9.594,12.484C18.078,147.922,0,199.844,0,256 c0,56.313,18.156,108.484,49.031,150.719c3.125,4.328,6.406,8.563,9.844,12.656C105.844,475.922,176.719,512,256,512 c79.688,0,150.813-36.406,197.75-93.438c3.453-4.078,6.734-8.313,9.781-12.641C494.078,363.766,512,312,512,256 C512,199.844,493.922,147.922,463.203,105.688z M471.688,247.969H385.75c-0.625-32.563-5.031-63.438-12.5-91.219 c21.156-7.219,40.594-16.359,57.781-27.063C455.328,163.156,470.047,203.938,471.688,247.969z M263.984,41.906 c37.375,5.188,70.438,46.109,89.297,104.281c-27.469,7.828-57.594,12.406-89.297,13.094V41.906z M247.984,41.906v117.375 c-31.703-0.688-61.828-5.266-89.297-13.094C177.547,88.016,210.609,47.094,247.984,41.906z M247.984,175.266v72.703H142.219 c0.625-30.766,4.891-60.094,11.984-86.516C183.094,169.75,214.703,174.594,247.984,175.266z M247.984,263.969v72.703 c-33.234,0.797-64.828,5.734-93.703,14.094c-7.141-26.484-11.422-55.922-12.063-86.797H247.984z M247.984,352.656v117.375 c-37.297-5.172-70.313-45.938-89.188-103.938C186.625,358.031,216.734,353.453,247.984,352.656z M263.984,470.031V352.625 c31.703,0.563,61.859,5.094,89.359,12.875C334.5,423.813,301.406,464.844,263.984,470.031z M263.984,336.625v-72.656H369.75 c-0.625,30.625-4.859,59.859-11.891,86.188C328.938,341.938,297.281,337.188,263.984,336.625z M263.984,247.969v-72.703 c33.281-0.672,64.891-5.5,93.797-13.797c7.078,26.406,11.344,55.75,11.969,86.5H263.984z M421.281,117.203 c-15.656,9.547-33.344,17.703-52.563,24.266c-13.219-40.938-33.266-74-57.406-94.219 C354.906,58.797,393.156,83.609,421.281,117.203z M200.656,47.25c-24.141,20.234-44.188,53.281-57.406,94.203 c-19.188-6.563-36.891-14.703-52.531-24.25C118.844,83.625,157.063,58.813,200.656,47.25z M80.969,129.688 c17.188,10.703,36.609,19.828,57.75,27.063c-7.469,27.781-11.875,58.656-12.5,91.219H40.313 C41.953,203.938,56.688,163.156,80.969,129.688z M40.313,263.969h85.906c0.625,32.688,5.063,63.688,12.594,91.563 c-21.094,7.25-40.469,16.359-57.609,27.031C56.75,348.984,41.938,308.109,40.313,263.969z M91.125,395.203 c15.875-9.703,33.484-17.797,52.281-24.297c13.219,40.781,33.25,73.703,57.344,93.844 C157.344,453.25,119.219,428.594,91.125,395.203z M311.219,464.75c24.25-20.25,44.359-53.438,57.578-94.547 c19.281,6.547,37.047,14.719,52.734,24.281C393.313,428.234,354.938,453.156,311.219,464.75z M431.359,381.922 c-17.266-10.734-36.781-19.859-58.016-27.063c7.406-27.703,11.781-58.453,12.406-90.891h85.938 C470.078,307.859,455.5,348.438,431.359,381.922z"></path> </g> </g></svg>
            }
            {
                props.name === "location" &&
                <svg stroke="currentColor" fill="currentColor" width={props.width} height={props.height} strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M505.04 442.66l-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99zm-297.02-90.7c-79.54 0-144-64.34-144-143.98 0-79.53 64.35-143.98 144-143.98 79.54 0 144 64.34 144 143.98 0 79.53-64.35 143.98-144 143.98zm.02-239.96c-40.78 0-73.84 33.05-73.84 73.83 0 32.96 48.26 93.05 66.75 114.86a9.24 9.24 0 0 0 14.18 0c18.49-21.81 66.75-81.89 66.75-114.86 0-40.78-33.06-73.83-73.84-73.83zm0 96c-13.26 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"></path>
                </svg>
            }
            {
                props.name === "star" &&
                <svg viewBox="0 0 32 32" width={props.width} height={props.height} enableBackground="new 0 0 32 32" id="Editable-line" version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor" stroke="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"><path d=" M16.842,3.548l3.29,6.984c0.137,0.29,0.401,0.491,0.707,0.538l7.357,1.12c0.77,0.117,1.077,1.108,0.52,1.677l-5.324,5.436 c-0.221,0.226-0.322,0.551-0.27,0.87l1.257,7.676c0.131,0.803-0.673,1.416-1.362,1.036l-6.58-3.624c-0.273-0.151-0.6-0.151-0.873,0 l-6.58,3.624c-0.688,0.379-1.493-0.233-1.362-1.036l1.257-7.676c0.052-0.319-0.049-0.644-0.27-0.87l-5.324-5.436 c-0.557-0.569-0.25-1.56,0.52-1.677l7.357-1.12c0.306-0.047,0.57-0.248,0.707-0.538l3.29-6.984 C15.503,2.817,16.497,2.817,16.842,3.548z" id="XMLID_16_" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"></path></g></svg>
            }
            {
                props.name === "tickets" &&
                <svg viewBox="0 0 48 48" width={props.width} height={props.height} fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M30 30C33 30 35 31.8809 35 34L41 34L41 4L35 4C35 6 33 8 30 8C27 8 25 6 25 4L19 4L19 18"
                              fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path
                            d="M30 44L24 44C24 41.8809 22 40 19 40C16 40 14 41.8809 14 44L8 44L8 14L14 14C14 16 16 18 19 18C22 18 24 16 24 14L30 14L30 44Z"
                            fill="none" strokeWidth="4" strokeLinecap="round"
                            strokeLinejoin="round"></path>
                        <circle cx="14" cy="24" r="2" fill="white"></circle>
                        <circle cx="19" cy="24" r="2" fill="white"></circle>
                        <circle cx="24" cy="24" r="2" fill="white"></circle>
                    </g>
                </svg>
            }
        </span>

    )
}

export default Icons;