import React, { useContext } from 'react'
import { GlobalDataContext } from '../../../context/context'
import { ButtonContent } from '../boton/ButtonContent'
import { FiPhoneOutgoing } from 'react-icons/fi'
import { BsCalendar4Range, BsClockHistory } from 'react-icons/bs'
import Navmenu from './NavMenu'



const HeaderTwo = () => {

    const { rpdata } = useContext(GlobalDataContext)

    return (
        <header className='absolute right-[3%] left-[3%] z-[15] mt-5'>
            <div className='md:flex block'>
                <div className='w-[100%] mr-0 md:w-[100%] lg:w-[25%] lg:mr-10'>
                    <img
                        src={rpdata?.dbPrincipal?.logo}
                        alt='logo'
                        loading='lazy'
                        className='w-[80%] mx-auto pt-3 pb-5'
                    />
                </div>

                <div className=' md:block w-[100%] rounded-tr-[20px] rounded-br-[20px] px-5 pt-6 pb-3 lg:w-[75%] self-center bg-[#0000006c]'>
                    <div className='md:flex hidden'>
                        <div className='w-[55%] lg:w-[75%]'>
                            <div className='grid grid-cols-1 lg:grid-cols-3'>

                                <div className='flex  text-white'>
                                    <div className='w-[15%] self-center mr-3'>
                                        <FiPhoneOutgoing color='white' fontSize={35} />
                                    </div>
                                    <div>
                                        <a
                                            href={`tel:+1${rpdata?.dbPrincipal?.phones?.[0]?.phone}`}
                                        >
                                            <p className='-mb-3'>Phone Number</p>
                                            <h5 className='text-[21px]'>
                                                {rpdata?.dbPrincipal?.phones?.[0]?.phone}
                                            </h5>
                                        </a>
                                    </div>
                                </div>

                                <div className='hidden text-white  lg:flex'>
                                    <div className='w-[15%] self-center mr-3'>
                                        <BsCalendar4Range color='white' fontSize={35} />
                                    </div>
                                    <div>
                                        <p className='-mb-3'>Workdays</p>
                                        <h5 className='text-[21px]'>
                                            {rpdata?.dbPrincipal?.workdays?.[0]?.day}
                                        </h5>
                                    </div>
                                </div>

                                <div className='hidden lg:flex justify-end text-white'>
                                    <div className='w-[15%] self-center mr-3'>
                                        <BsClockHistory color='white' fontSize={35} />
                                    </div>
                                    <div>
                                        <p className='-mb-3'>Work Hours</p>
                                        <h5 className='text-[21px]'>
                                            {rpdata?.dbPrincipal?.workHours?.[0]?.hour}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[45%] lg:w-[25%] text-end border-l ml-0 lg:ml-7'>
                            <ButtonContent btnphone={rpdata?.dbPrincipal?.phones[0]?.phone} />
                        </div>
                    </div>
                    {/* <div className='flex justify-between items-center md:pt-6 md:pb-6 md:mt-4 lg:bg-white rounded-br-[20px]'>
                        <nav>
                            <Navmenu />
                        </nav>
                        <ul className="flex justify-center space-x-7 pr-5">
                            {rpdata?.dbSocialMedia?.redes.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.url} target="_blank" rel='noopener noreferrer'>
                                            <i
                                                className={`fab fa-${item.icon}`}
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div> */}
                </div>


            </div>


        </header>
    )
}

export default HeaderTwo