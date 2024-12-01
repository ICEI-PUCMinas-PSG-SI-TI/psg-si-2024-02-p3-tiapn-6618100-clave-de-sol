import React from "react";

const Home = (  ) => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url('/banner-home.jpeg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
                className="py-20"
            >
                <div className="container mx-auto">
                    <div className={"grid grid-cols-2"}>
                        <div></div>
                        <div>
                            <h1 className={'text-8xl text-acent font-extrabold mb-2'}>Clave de Sol</h1>
                            <h2 className={'text-2xl text-acent font-bold mb-6'}>Escola de Música & Instrumentos</h2>
                            <p className={'text-white font-regular text-lg'}>
                                Desperte seu talento musical! Aulas de instrumentos, canto e teoria musical para todas
                                as idades e níveis.<br/><br/>
                                Increva-se agora e agende sua aula experimental!
                            </p>
                            <div className={'mt-12'}>
                                <a href={'/matricular'} className={'p-3 rounded font-bold text-xl inline'}>
                                    <button
                                        className={'p-3 px-4 rounded-md bg-accent flex items-center justify-center gap-2'}>
                                        MATRICULE-SE
                                        <svg fill="#1A1A40" xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
                                        </svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'container mx-auto'}>
                <div className={'py-12'}>
                    <h1 className="text-4xl font-extrabold text-acent text-center mb-8">
                        Cursos
                    </h1>
                    <p className={'text-center'}>
                        Na Clave de Sol, oferecemos uma variedade de cursos para atender a todos os estilos e níveis de
                        habilidade. O Curso de Violão ensina desde os acordes básicos até técnicas avançadas, explorando
                        diferentes gêneros musicais. O Curso de Piano oferece uma imersão nas técnicas do instrumento,
                        desde a leitura de partituras até a execução de músicas clássicas e populares. O Curso de
                        Bateria é perfeito para quem quer dominar o ritmo, aprendendo técnicas de percussão e
                        coordenação. Além disso, o Curso de Teoria Musical proporciona uma base sólida para entender a
                        estrutura da música, ideal para quem deseja aprimorar seu conhecimento em qualquer instrumento.
                    </p>
                    <div className={'mt-16'}>
                        <div className={'grid grid-cols-4 gap-4'}>
                            <div className={'border p-3 flex items-center flex-col py-6 rounded'}
                                 style={{borderColor: '#1A1A40', borderWidth: 2}}>
                                <svg width="58" height="58" viewBox="0 0 58 58" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M52.6757 0.798633C51.6109 -0.266211 49.889 -0.266211 48.8355 0.798633L43.3867 6.23613C43.1148 6.50801 42.8996 6.83652 42.7636 7.19902L41.0191 11.8436L32.2398 20.6342C27.1308 17.3037 20.991 17.2131 17.4 20.8154C16.1539 22.0615 15.3609 23.6021 14.9757 25.3014C14.5566 27.1818 12.8121 28.7791 10.8863 28.8811C7.98629 29.0283 5.30153 30.0932 3.26246 32.1209C-1.81254 37.2072 -0.860973 46.383 5.38082 52.6248C11.6226 58.8666 20.7984 59.8182 25.8734 54.7432C27.9011 52.7154 28.9773 50.0193 29.1132 47.1193C29.2152 45.1936 30.8125 43.4604 32.6929 43.0299C34.3922 42.6447 35.9328 41.8404 37.1789 40.6057C40.7812 37.0033 40.6906 30.8748 37.3601 25.7658L46.1507 16.9752L50.7953 15.2307C51.1578 15.0947 51.4863 14.8795 51.7582 14.6076L57.1957 9.17012C58.2605 8.10527 58.2605 6.3834 57.1957 5.32988L52.6757 0.798633ZM23.5625 29.0057C25.0046 29.0057 26.3876 29.5785 27.4074 30.5983C28.4271 31.618 29 33.001 29 34.4432C29 35.8853 28.4271 37.2683 27.4074 38.2881C26.3876 39.3078 25.0046 39.8807 23.5625 39.8807C22.1203 39.8807 20.7373 39.3078 19.7176 38.2881C18.6978 37.2683 18.125 35.8853 18.125 34.4432C18.125 33.001 18.6978 31.618 19.7176 30.5983C20.7373 29.5785 22.1203 29.0057 23.5625 29.0057Z"
                                        fill="#1A1A40"/>
                                </svg>
                                <span className={'mt-4'}>Violão</span>
                            </div>
                            <div className={'border p-3 flex items-center flex-col py-6 rounded'}
                                 style={{borderColor: '#1A1A40', borderWidth: 2}}>
                                <svg width="51" height="51" viewBox="0 0 51 51" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.66667 51C4.10833 51 2.77431 50.4451 1.66458 49.3354C0.554861 48.2257 0 46.8917 0 45.3333V5.66667C0 4.10833 0.554861 2.77431 1.66458 1.66458C2.77431 0.554861 4.10833 0 5.66667 0H45.3333C46.8917 0 48.2257 0.554861 49.3354 1.66458C50.4451 2.77431 51 4.10833 51 5.66667V45.3333C51 46.8917 50.4451 48.2257 49.3354 49.3354C48.2257 50.4451 46.8917 51 45.3333 51H5.66667ZM5.66667 45.3333H14.875V32.5833H14.1667C13.3639 32.5833 12.691 32.3118 12.1479 31.7687C11.6049 31.2257 11.3333 30.5528 11.3333 29.75V5.66667H5.66667V45.3333ZM36.125 45.3333H45.3333V5.66667H39.6667V29.75C39.6667 30.5528 39.3951 31.2257 38.8521 31.7687C38.309 32.3118 37.6361 32.5833 36.8333 32.5833H36.125V45.3333ZM19.125 45.3333H31.875V32.5833H31.1667C30.3639 32.5833 29.691 32.3118 29.1479 31.7687C28.6049 31.2257 28.3333 30.5528 28.3333 29.75V5.66667H22.6667V29.75C22.6667 30.5528 22.3951 31.2257 21.8521 31.7687C21.309 32.3118 20.6361 32.5833 19.8333 32.5833H19.125V45.3333Z"
                                        fill="#1A1A40"/>
                                </svg>
                                <span className={'mt-4'}>Plano</span>
                            </div>
                            <div className={'border p-3 flex items-center flex-col py-6 rounded'}
                                 style={{borderColor: '#1A1A40', borderWidth: 2}}>
                                <svg width="58" height="51" viewBox="0 0 58 51" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M56.7766 4.99045C58.034 4.1635 58.3852 2.48694 57.5582 1.22951C56.7313 -0.0279072 55.0547 -0.379079 53.7973 0.447874L41.9367 8.20764C38.0398 7.55061 33.6445 7.24475 29 7.24475C12.982 7.24475 0 10.8697 0 19.9322V38.0572C0 41.603 3.10391 44.7182 8.15625 46.9725V35.3385C8.15625 33.8319 9.36836 32.6197 10.875 32.6197C12.3816 32.6197 13.5938 33.8319 13.5938 35.3385V48.8643C17.332 49.8725 21.648 50.5069 26.2812 50.6881V38.9635C26.2812 37.4569 27.4934 36.2447 29 36.2447C30.5066 36.2447 31.7188 37.4569 31.7188 38.9635V50.6881C36.352 50.5069 40.668 49.8725 44.4062 48.8643V35.3385C44.4062 33.8319 45.6184 32.6197 47.125 32.6197C48.6316 32.6197 49.8438 33.8319 49.8438 35.3385V46.9725C54.8961 44.7182 58 41.603 58 38.0572V19.9322C58 15.2764 54.5789 12.0592 49.0734 10.0315L56.7652 4.99045H56.7766ZM34.8227 12.8635L27.5047 17.6553C26.2473 18.4822 25.8961 20.1588 26.723 21.4162C27.55 22.6737 29.2266 23.0248 30.484 22.1979L43.0695 13.951C44.7348 14.3135 46.2301 14.744 47.5328 15.2537C51.9281 16.9643 52.5625 18.7315 52.5625 19.9322C52.5625 20.0229 52.2566 21.8807 47.3516 23.999C42.9449 25.9022 36.4766 27.1822 29 27.1822C21.5234 27.1822 15.0551 25.9022 10.6484 23.999C5.74336 21.8807 5.4375 20.0229 5.4375 19.9322C5.4375 18.7315 6.07188 16.9643 10.4672 15.2537C14.7945 13.5772 21.2742 12.6822 29 12.6822C31.0391 12.6822 32.9762 12.7389 34.8227 12.8635Z"
                                        fill="#1A1A40"/>
                                </svg>
                                <span className={'mt-4'}>Bateria</span>
                            </div>
                            <div className={'border p-3 flex items-center flex-col py-6 rounded'}
                                 style={{borderColor: '#1A1A40', borderWidth: 2}}>
                                <svg width="22" height="60" viewBox="0 0 22 60" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.2179 0.611731C12.1787 1.77455 10.6755 4.55852 10.0091 6.56244C9.34249 8.54324 9.03836 11.423 9.29007 13.4899C9.36977 14.0904 9.57337 15.4411 9.75325 16.48C9.94392 17.5188 10.0908 18.4655 10.0915 18.5695C10.0923 18.685 9.5674 19.2896 8.8917 19.9414C3.96852 24.6557 1.33042 28.8228 0.400519 33.3363C0.285652 33.9034 0.237146 34.7012 0.244682 35.799C0.264356 38.665 0.891938 40.4404 2.53489 42.2898C4.37367 44.3574 6.66112 45.7286 9.41899 46.4262C10.241 46.6401 10.7595 46.6828 11.9579 46.6861C13.5233 46.6754 14.235 46.5433 15.2896 46.0392L15.7739 45.8163L15.9831 46.4158C16.7757 48.6408 17.0689 52.025 16.6506 54.0041C15.9606 57.2909 13.8984 58.8422 10.7108 58.4596C9.61946 58.3284 8.31062 57.9675 7.93086 57.6928C7.7463 57.5438 7.8002 57.5319 8.43715 57.5275C9.84062 57.5179 10.9907 56.7703 11.5864 55.4719C11.8737 54.8574 11.9048 54.6723 11.8984 53.7478C11.8923 52.8464 11.8476 52.6271 11.5849 52.1088C11.2016 51.3256 10.6145 50.7287 9.87788 50.3639C9.37952 50.1131 9.1417 50.0685 8.36447 50.0854C7.18772 50.0934 6.50964 50.3986 5.83506 51.2122C5.20333 51.9793 4.9817 52.7204 5.00106 53.9685C5.03051 55.1124 5.27381 55.9544 5.88496 56.9094C6.34354 57.6574 6.82158 58.0933 7.65603 58.5499C8.54471 59.0407 9.27986 59.1859 10.8561 59.1751C12.497 59.1638 13.1115 59.0325 14.3056 58.4002C16.4141 57.2994 17.4276 55.5242 17.5273 52.7499C17.5923 51.2008 17.4437 49.9999 16.897 47.4265C16.6401 46.1801 16.5383 45.5105 16.6137 45.4869C16.8722 45.3927 18.6659 44.0398 19.1486 43.5857C20.4036 42.3867 21.2878 40.6471 21.471 39.0395C21.5936 38.0216 21.5184 36.4966 21.3179 35.6081C21.2512 35.3197 20.9983 34.6511 20.7571 34.1212C19.7046 31.7823 17.5151 30.5261 14.4488 30.5125L13.1532 30.4983L12.4391 27.1286L11.7142 23.7589L12.2398 23.2699C12.5295 23.0021 13.2263 22.2808 13.8051 21.6643C16.0018 19.257 17.1743 17.0531 17.8553 14.0321C18.1697 12.6431 18.1665 9.02584 17.8539 7.53715C17.4076 5.4253 16.5398 3.25857 15.4265 1.498C14.3786 -0.158992 14.0214 -0.306777 13.2179 0.611731ZM15.238 3.92624C15.7688 4.18841 16.3026 4.87816 16.5994 5.65043C16.9295 6.5496 16.9765 8.6873 16.6827 9.91435C16.4412 10.9215 15.8252 12.3934 15.2592 13.2987C14.3729 14.7263 11.7698 17.7027 11.0922 18.0772L10.6512 18.3229L10.5951 18.0113C10.4383 17.1918 10.3802 15.0195 10.4788 13.6551C10.706 10.5794 11.2088 8.33396 12.1451 6.31664C13.1344 4.17182 14.1438 3.37903 15.238 3.92624ZM11.7729 27.5954L12.3979 30.5612L11.9129 30.6917C11.6435 30.7629 11.0515 31.0212 10.6104 31.2554C9.53472 31.829 8.14141 33.3179 7.6417 34.4423C6.56765 36.8304 6.82103 39.14 8.33237 40.6899C8.88692 41.2639 9.96024 41.9153 10.0996 41.7641C10.1425 41.7291 10.0113 41.4873 9.82601 41.2343C9.17223 40.3605 8.9956 39.7954 8.98672 38.5011C8.9791 37.3917 9.00014 37.3107 9.383 36.4644C9.82961 35.4674 10.4297 34.8161 11.3225 34.3362C11.8174 34.0785 12.9811 33.7469 13.0789 33.8387C13.1116 33.8847 15.4535 44.7552 15.4545 44.9054C15.4556 45.0672 14.7668 45.3724 13.7647 45.6567C12.0836 46.1189 9.91299 46.0414 8.34354 45.4628C6.96881 44.9406 5.63425 43.979 4.75209 42.864C4.04417 41.9674 3.70522 41.3457 3.26489 40.1121C2.9457 39.2244 2.87855 38.8782 2.81624 37.6651C2.61971 34.1994 3.56404 31.7891 6.26477 28.8814C7.64721 27.381 11.027 24.3184 11.0931 24.5028C11.126 24.5719 11.427 25.9683 11.7729 27.5954ZM15.6391 34.0407C16.7748 34.345 17.8272 35.1005 18.3951 36.0443C19.5964 38.0353 19.4318 40.7986 17.9777 42.8657C17.6035 43.3999 16.4344 44.5289 16.2509 44.5302C16.1969 44.5305 15.6521 42.2345 15.0496 39.3956C14.4472 36.5683 13.9232 34.1449 13.8898 34.0065C13.8343 33.7873 13.8666 33.7755 14.5257 33.8519C14.9038 33.884 15.4011 33.973 15.6391 34.0407Z"
                                        fill="#1A1A40"/>
                                </svg>
                                <span className={'mt-4'}>Teoria Musical</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'py-12'}>
                    <div className={'grid grid-cols-2 gap-4 items-center'}>
                        <div>
                            <h3 className={'text-4xl font-bold text-acent mb-10'}>
                                Quem somos:<br/>
                                A Musica em Cada Nota
                            </h3>
                            <p className={'text-lg'}>
                                Na Clave de Sol, acreditamos que a música é uma poderosa forma de expressão e
                                desenvolvimento pessoal. Nossa missão é oferecer uma educação musical de qualidade, com
                                professores experientes e apaixonados, em um ambiente acolhedor e motivador. Seja para
                                iniciantes ou músicos mais experientes, nossa abordagem personalizada garante que cada
                                aluno possa evoluir no seu próprio ritmo, explorando seu potencial e amor pela música.
                                Aqui, todos são bem-vindos para embarcar nessa jornada musical!
                            </p>
                        </div>
                        <div>
                            <img className={'img-fluid rounded'} src={'/image-1.jpeg'} title={'imagem 1'}
                                 alt={'imagem 1'}/>
                        </div>
                    </div>
                </div>
                <div className={'py-12'}>
                    <div className={'grid grid-cols-2 gap-4 items-center'}>
                        <div>
                            <h3 className={'text-4xl font-bold text-acent mb-10'}>
                                Vamos Conversar?
                            </h3>
                            <p className={'text-lg'}>
                                Estamos prontos para ajudar você a dar o primeiro passo na sua jornada musical! Entre em
                                contato com a Clave de Sol:<br/><br/>
                                E-mail: contato@clavedesol.com<br/>
                                Telefone: (31) 912345678<br/><br/>

                                Ficaremos felizes em esclarecer suas dúvidas e agendar sua primeira aula experimental,
                                onde você poderá conhecer nossos professores, explorar os instrumentos e escolher o
                                curso ideal para você. Vamos começar?
                            </p>
                        </div>
                        <div className={'text-center'}>
                            <img className={'img-fluid rounded mx-auto'} src={'/conversa.png'} title={'imagem 1'}
                                 alt={'imagem 1'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;