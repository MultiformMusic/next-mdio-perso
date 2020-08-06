import { useEffect } from 'react';

export default ({children}) => {

    const myRef = React.createRef();
    let observer = undefined; 

    useEffect(() => {

        observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio > 0) {
                    if (myRef.current) myRef.current.style.opacity = "100%";
                }
            }
        );

        if (myRef.current) {
            observer.observe(myRef.current);
        }

    }, [myRef]);


    return (
        <div ref={myRef} style={{opacity: "0%"}}>
            {children}
        </div>
    )
}
