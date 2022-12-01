import React, { useContext } from 'react'
import { GlobalDataContext } from '../../../context/context'
import { BiPhoneCall } from 'react-icons/bi'
import { BsCalendar4Range } from 'react-icons/bs'



const HeaderTwo = () => {

    const { rpdata } = useContext(GlobalDataContext)

    return (
        <header className='absolute right-[3%] left-[3%] z-[15]'>
            <div className='md:flex block'>


                <div className=' md:block w-[100%] rounded-[20px] px-5 pb-3 lg:w-[100%] self-center'>
                    <div className='md:flex'>
                        <div className='w-[100%] lg:w-[100%]'>
                            <div className='flex mx-auto justify-center'>

                                <div className='hidden lg:flex w-[20%] mx-auto justify-center text-white'>
                                    <div className='w-[15%] self-center mr-3'>
                                        <BiPhoneCall color='white' fontSize={35} />
                                    </div>
                                    <div className='self-center'>
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

                                <div className=' text-white  lg:flex lg:w-[40%] w-full mx-auto justify-center'>
                                    <div>
                                        <img
                                            src={rpdata?.dbPrincipal?.logo}
                                            alt='logo'
                                            loading='lazy'
                                            className=' w-full lg:w-[70%] mx-auto'
                                        />
                                    </div>
                                </div>

                                <div className='hidden lg:flex w-[20%] mx-auto justify-center text-white'>
                                    <div className='w-[15%] self-center mr-3'>
                                        <BsCalendar4Range color='white' fontSize={35} />
                                    </div>
                                    <div className='self-center'>
                                        <p className='-mb-3'>{rpdata?.dbPrincipal?.workHours?.[0]?.hour}</p>
                                        <h5 className='text-[21px]'>
                                            {rpdata?.dbPrincipal?.workdays?.[0]?.day}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        </header>
    )
}

export default HeaderTwo