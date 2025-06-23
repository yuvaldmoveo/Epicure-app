import {useEffect, useState } from 'react'

export type Media = 'mobile' | 'desktop'

export function useMedia(): Media {
    const [media, setMedia] = useState<Media>(
        window.innerWidth <= 768 ? 'mobile' : 'desktop'
    )

    useEffect(() => {
        const onResize = () => {
            setMedia(window.innerWidth <= 768 ? 'mobile' : 'desktop')
        }

        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    return media
}