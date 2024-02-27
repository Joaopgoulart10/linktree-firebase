import { Social } from '../../components/social'

import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa'

export function Home(){
    return(
        <div className="flex flex-col w-full py-4 items-center justify-center">
            <h1 className="md:text-4xl  text-3xl font-bold text-white mt-20 flex items-center justify-center">João Paulo Goulart Matos</h1>
            <span className="text-gray-100 mb-5 mt-5">Veja meus links 👇</span>
        

            <main className="flex flex-col w-11/12 max-w-xl text-center">
                <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
                    <a> 
                        <p className="text-base md:text-lg font-bold">
                            Meu Linkedln
                        </p>
                    </a>
                </section>

                <footer className="flex justify-center gap-3 my-4">
                    <Social url="https://www.instagram.com/joaopgoulart/?hl=en">
                        <FaInstagram size={35} color="#FFF" />
                    </Social>

                    <Social url="https://www.linkedin.com/in/joao-paulo-goulart-matos/">
                        <FaLinkedin size={35} color="#FFF" />
                    </Social>

                    <Social url="https://wa.me/5548988088387?text=">
                        <FaWhatsapp size={35} color="#FFF" />
                    </Social>

                    <Social url="https://github.com/Joaopgoulart10">
                        <FaGithub size={35} color="#FFF" />
                    </Social>
                </footer>
            </main>
        </div>
    )
}