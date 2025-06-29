import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect, useState, useCallback } from 'react';
import styles from '../assets/styles/cmps/Carousel.module.scss'

interface CarouselProps<T> {
    items: T[]
    renderItem: (item: T) => React.ReactNode
    itemKey: (item: T) => string | number
}

export const Carousel = <T,>({
    items,
    renderItem,
    itemKey,
}: CarouselProps<T>) => {
    const [emblaRef] = useEmblaCarousel({
        loop: false,
        axis: 'x',
        dragFree: false,
        skipSnaps: false,
        containScroll: 'trimSnaps',
    })

    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {items.map((item) => (
                        <div className={styles.embla__slide} key={itemKey(item)}>
                            {renderItem(item)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
