import { Steps } from '@/components/componentsIndex'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <MaxWidthWrapper className='flex flex-col flex-1 '>
            <Steps />
            {children}
        </MaxWidthWrapper>
    )
}

export default Layout