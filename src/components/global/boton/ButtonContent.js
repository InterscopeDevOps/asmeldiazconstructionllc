import React,{useContext} from 'react'
import { GlobalDataContext } from '../../../context/context';
import { Link } from 'react-router-dom'

export const ButtonContent = ({ btnName, btnphone, btnStyle }) => {
    const { rpdata } = useContext(GlobalDataContext);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        btnphone ?
            <a
                className={`
                boton one
                my-3
                ${btnStyle}
                px-6
                py-4
                w-52
                rounded-lg
            `}
                href={`tel:+1${btnphone}`}
            >

                <span>
                    Contact Us
                </span>
            </a>
            :
            // estilo de boton: one, two, three
            <a
                className={`
                boton
                my-3
                ${btnStyle ? btnStyle : 'one'}
                px-6
                py-4
                w-52
                rounded-lg
            `}
                href={`tel:+1${rpdata?.dbPrincipal?.phones[0]?.phone}`}
                onClick={goToTop}
            >

                <span className='capitalize'>
                    {btnName ? btnName : 'Contact Us'}
                </span>
            </a>
    )
}