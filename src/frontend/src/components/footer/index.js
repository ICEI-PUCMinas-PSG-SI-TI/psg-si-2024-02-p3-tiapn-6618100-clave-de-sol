import React from "react";

const Footer = (  ) => {
    return (
        <footer className="bg-primary p-3 py-8">
            <div className="container mx-auto text-white">
                <div className="divider-100"></div>
                <div className="my-8">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-sm">
                            <h4 className="font-extrabold mb-5 text-xl">
                                Contato
                            </h4>
                            <p className="mb-4">
                                contato@clavedesol.com
                            </p>
                            <p className="mb-4">
                                (31) 912345678
                            </p>
                            <p className="mb-4">
                                Rua dos Alfeneiros, n 4
                            </p>
                        </div>
                        <div className="text-sm">
                            <h4 className="font-extrabold mb-5 text-xl">
                                Siga
                            </h4>
                            <div className="flex gap-4">
                                <a>
                                    <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                    </svg>
                                </a>
                                <a>
                                    <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                                    </svg>
                                </a>
                                <a>
                                    <svg fill="white" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M22 5.90698C21.2504 6.23436 20.4565 6.44902 19.644 6.54398C20.4968 6.04321 21.138 5.24909 21.448 4.30998C20.64 4.78031 19.7587 5.11158 18.841 5.28998C18.4545 4.88519 17.9897 4.56337 17.4748 4.34416C16.9598 4.12495 16.4056 4.01295 15.846 4.01498C13.58 4.01498 11.743 5.82498 11.743 8.05498C11.743 8.37098 11.779 8.67998 11.849 8.97498C10.2236 8.89768 8.63212 8.48239 7.17617 7.75562C5.72022 7.02885 4.43176 6.00656 3.393 4.75398C3.02883 5.36838 2.83742 6.06976 2.839 6.78398C2.8397 7.45195 3.00683 8.10921 3.32529 8.69637C3.64375 9.28354 4.1035 9.78209 4.663 10.147C4.01248 10.126 3.37602 9.95231 2.805 9.63998V9.68998C2.805 11.648 4.22 13.281 6.095 13.653C5.74261 13.7465 5.37958 13.7939 5.015 13.794C4.75 13.794 4.493 13.769 4.242 13.719C4.51008 14.5269 5.02311 15.2313 5.70982 15.7343C6.39653 16.2373 7.22284 16.514 8.074 16.526C6.61407 17.6505 4.82182 18.258 2.979 18.253C2.647 18.253 2.321 18.233 2 18.197C3.88125 19.3877 6.06259 20.0183 8.289 20.015C15.836 20.015 19.962 13.858 19.962 8.51898L19.948 7.99598C20.7529 7.42965 21.4481 6.72183 22 5.90698Z"
                                            fill="white"/>
                                    </svg>
                                </a>
                                <a>
                                    <svg fill="white" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.017 2H7.947C6.37015 2.00185 4.85844 2.62914 3.74353 3.74424C2.62862 4.85933 2.00159 6.37115 2 7.948L2 16.018C2.00185 17.5948 2.62914 19.1066 3.74424 20.2215C4.85933 21.3364 6.37115 21.9634 7.948 21.965H16.018C17.5948 21.9631 19.1066 21.3359 20.2215 20.2208C21.3364 19.1057 21.9634 17.5938 21.965 16.017V7.947C21.9631 6.37015 21.3359 4.85844 20.2208 3.74353C19.1057 2.62862 17.5938 2.00159 16.017 2V2ZM19.957 16.017C19.957 16.5344 19.8551 17.0468 19.6571 17.5248C19.4591 18.0028 19.1689 18.4371 18.803 18.803C18.4371 19.1689 18.0028 19.4591 17.5248 19.6571C17.0468 19.8551 16.5344 19.957 16.017 19.957H7.947C6.90222 19.9567 5.90032 19.5415 5.16165 18.8026C4.42297 18.0638 4.008 17.0618 4.008 16.017V7.947C4.00827 6.90222 4.42349 5.90032 5.16235 5.16165C5.90122 4.42297 6.90322 4.008 7.948 4.008H16.018C17.0628 4.00827 18.0647 4.42349 18.8034 5.16235C19.542 5.90122 19.957 6.90322 19.957 7.948V16.018V16.017Z"
                                            fill="white"/>
                                        <path
                                            d="M11.982 6.81897C10.6134 6.82109 9.30154 7.36576 8.33391 8.33358C7.36627 9.3014 6.82186 10.6134 6.82001 11.982C6.82159 13.3509 7.36603 14.6633 8.33391 15.6314C9.30179 16.5994 10.6141 17.1441 11.983 17.146C13.3521 17.1444 14.6647 16.5998 15.6328 15.6317C16.6008 14.6636 17.1454 13.3511 17.147 11.982C17.1449 10.6131 16.5999 9.30085 15.6317 8.33316C14.6634 7.36547 13.3509 6.82129 11.982 6.81997V6.81897ZM11.982 15.138C11.1452 15.138 10.3428 14.8056 9.75109 14.2139C9.15941 13.6222 8.82701 12.8197 8.82701 11.983C8.82701 11.1462 9.15941 10.3437 9.75109 9.75205C10.3428 9.16037 11.1452 8.82797 11.982 8.82797C12.8188 8.82797 13.6213 9.16037 14.2129 9.75205C14.8046 10.3437 15.137 11.1462 15.137 11.983C15.137 12.8197 14.8046 13.6222 14.2129 14.2139C13.6213 14.8056 12.8188 15.138 11.982 15.138Z"
                                            fill="white"/>
                                        <path
                                            d="M17.156 8.09497C17.8392 8.09497 18.393 7.54115 18.393 6.85797C18.393 6.1748 17.8392 5.62097 17.156 5.62097C16.4728 5.62097 15.919 6.1748 15.919 6.85797C15.919 7.54115 16.4728 8.09497 17.156 8.09497Z"
                                            fill="white"/>
                                    </svg>
                                </a>
                                <a>
                                    <svg fill="white" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.959 13.719V21.098H17.681V14.213C17.681 12.483 17.062 11.303 15.514 11.303C14.332 11.303 13.628 12.099 13.319 12.868C13.206 13.143 13.177 13.526 13.177 13.911V21.098H8.897C8.897 21.098 8.955 9.438 8.897 8.229H13.177V10.053L13.149 10.095H13.177V10.053C13.745 9.178 14.76 7.927 17.033 7.927C19.848 7.927 21.959 9.767 21.959 13.719ZM4.421 2.026C2.958 2.026 2 2.986 2 4.249C2 5.484 2.93 6.473 4.365 6.473H4.393C5.886 6.473 6.813 5.484 6.813 4.249C6.787 2.986 5.887 2.026 4.422 2.026H4.421ZM2.254 21.098H6.532V8.229H2.254V21.098Z"
                                            fill="white"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider-100"></div>
                <div className="grid grid-cols-2 gap-4 items-center p-5">
                    <div>
                        <p>
                            Clave de Sol @ 2024. All rights reserved.
                        </p>
                    </div>
                    <div className="flex flex-row space-x-8 justify-end">
                        <a href="/">
                            Home
                        </a>
                        <a href="/cursos">
                            Cursos
                        </a>
                        <a href="/sobre-nos">
                            Sobre Nós
                        </a>
                        <a href="/contato">
                            Contato
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;