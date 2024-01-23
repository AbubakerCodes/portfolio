import { useEffect, useState } from "react";
import _ from 'lodash';

function useScreenSize () {
    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia('(min-width: 900px)').matches);

    useEffect (() => {
        //debouncing the resize event to prevent unnecessary re-renders
        const handleResize = _.debounce(() => {
            setIsLargeScreen(window.matchMedia('(min-width: 900px)').matches);
        }, 200);
        window.addEventListener("resize", handleResize);
        //Clean up function
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return isLargeScreen;
}

export default useScreenSize;