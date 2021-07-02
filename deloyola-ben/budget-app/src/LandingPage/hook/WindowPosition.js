import { useLayoutEffect, useState } from "react";

const useWindowPosition = (id) => {

    const [ animation, setAnimation ] = useState(false)

    useLayoutEffect(() =>{
        const updatePosition = () => {
            const newOffsetHeight = window.document.getElementById(id).offsetHeight
            console.log('windowOffset', window.pageYOffset, newOffsetHeight)
            if(window.pageYOffset > newOffsetHeight * 0.7) {
                setAnimation(true)
            }
        }

        window.addEventListener('scroll', updatePosition);
        updatePosition()
        return () => window.removeEventListener('scroll', updatePosition)
    }, [id])
    return animation
    
}
 
export default useWindowPosition;