'use client'
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import CustomButton from './CustomButton'
import { updateSearchParams } from '@/utils'

const ShowMore = ({ isNext, pageNumber }: ShowMoreProps) => {

    const router = useRouter()

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName=updateSearchParams('limit', `${newLimit}`)
        router.push(newPathName)
     }

    return (
        <div className='w-full flex-center gap-pmt-10'>
            {!isNext && <CustomButton
                title='Show More'
                btnType='button'
                containerStyles='bg-primary-blue rounded-full text-white'
                handleClick={handleNavigation} />}
        </div>
    )
}

export default ShowMore