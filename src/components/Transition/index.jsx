import { useState, useContext, useRef } from "react"
import { TransitionContext } from "@/context/TransitionContext";
import useIsomorphicLayoutEffect from "../useIsomorphicLayoutEffect";

export default function TransitionLayout({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children)
    const { timeline } = useContext(TransitionContext);
    const el = useRef(null);

    useIsomorphicLayoutEffect(() => {
        //if page is not the current page
        if (children.key !== displayChildren.key) {
            timeline.play().then( () => {
                timeline.pause().clear();
                window.scrollTo(0, 0)
                setDisplayChildren(children);
            })
        }

    }, [children])

    return <div ref={el}>{displayChildren}</div>
}