import CommunityHeader from '@/components/community/CommunityHeader'
import CommunityPost from '@/components/community/CommunityPost'
import React from 'react'

const CommunitySection = () => {
    return (
        <>
            <CommunityHeader />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <CommunityPost/>
                <CommunityPost/>
                <CommunityPost/>
            </div>
            
        </>
    )
}

export default CommunitySection