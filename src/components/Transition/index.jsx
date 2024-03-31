import { useState, useContext } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TransitionContext } from "@/context/TransitionContext";
gsap.registerPlugin(useGSAP);

export default function TransitionLayout({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children)
    const { timeline } = useContext(TransitionContext);
    const { contextSafe } = useGSAP(); 

    const exit = contextSafe( () => {
        timeline.play().then( () => {
            window.scrollTo(0, 0)
            setDisplayChildren(children);
            timeline.pause().clear();
        })
    })
    
    useGSAP(() => {
        //if page is not the current page
        if (children.key !== displayChildren.key) {
            exit();            
        }

    }, [children]) 

    return (
        <div className="bg-white">
            {displayChildren}
        </div>
    )
}