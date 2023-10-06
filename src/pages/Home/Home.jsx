
import Footer from "../../components/Footer/Footer";

export default function Home(){
    return(
            <div className="container-home md:bg-main-gray md:pt-30 md:pb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 md:w-980px mx-auto">
                    <div className="pt-10">
                        <img src="img/logo_facebook.svg" alt="Facebook" className="w-30 mx-auto md:mx-0 md:w-290px md:-mb-4 md:-ml-8"/>
                        <p className="hidden md:flex text-subtitle leading-8 w-500px pr-6">
                            O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.
                        </p>
                    </div>
                    <div className="md:w-396px md:place-self-end">
                        <div className="p-4 md:border md:shadow-xl rounded-md bg-white">
                            <form action="" className="flex flex-col">
                                <input type="text" placeholder="Email ou telefone" className="flex-1 mb-2 md:mb-3 p-3 rounded md:rounded-md border border-gray-400 bg-gray-200 md:bg-white text-sm md:text-base placeholder-gray-600 md:placeholder-gray-500"/>
                                <input type="password" placeholder="Senha" className="flex-1 mb-3 p-3 rounded md:rounded-md border border-gray-400 bg-gray-200 md:bg-white text-sm md:text-base placeholder-gray-600 md:placeholder-gray-500"/>
                                <input type="submit" value="Entrar" className="flex-1 mb-3 py-2 px-3 rounded-md bg-main-blue hover:bg-main-blue-hover font-semibold text-white text-xl"/>
                            </form>
                            <div className="flex flex-col divide-y divide-gray-400 text-center mt-2 md:mt-0">
                                <div className="pb-4 order-2 md:order-1">
                                    <a href="#" className="text-blue-600 hover:underline">Esqueceu a senha?</a>
                                </div>
                                <div className="pb-6 pt-8 order-1 md:order-2">
                                    <a href="#" className="py-3 px-4 bg-main-green hover:bg-main-green-hover text-white text-md md:text-lg font-bold rounded">Criar nova conta</a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block text-sm mt-5 text-center">
                            <p><a href="#" className="font-bold">Criar uma Página</a> para uma celebridade, banda ou empresa.</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
    );
}