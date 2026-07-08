import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import { useContext, type ReactNode } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

        if (usuario.token !== ""){

            component = (

                <div className="flex justify-center bg-[#000B26] text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Jhonatan Oliveira | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/devjhonatanoliveira/" target="_blank">
                            <LinkedinLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/ojjhon_/" target="_blank">
                            <InstagramLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://github.com/JhonatanOliveira18" target="_blank">
                            <GithubLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>


            )
        }
    return (
        <>
           { component } 
        </>
    )
}


export default Footer