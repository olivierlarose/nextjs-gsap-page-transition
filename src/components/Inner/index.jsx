import React, { useContext, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import { TransitionContext } from '@/context/TransitionContext';
import useIsomorphicLayoutEffect from '../useIsomorphicLayoutEffect';

export default function Index({children}) {
    const el = useRef();
    const { timeline } = useContext(TransitionContext);

    useIsomorphicLayoutEffect( () => {

        //entry animation will play immediately
       gsap.to(el.current, { opacity: 1, duration: 0.75})

        //add exit animation of the page
        timeline.add(
            gsap.to(el.current, { opacity: 0, duration: 1}),
            0
        )
    }, [])

    return (
        //add inital style to avoid the flash of unstyled content
        <div style={{opacity: 0}} ref={el}>
            {children}
        </div>
    )
}
