import { useEffect, useState } from "react";

const useFatch = (url) => {
    const [data, setdata] = useState([]);
    
    const getData = async () => {
        const res = await fetch(url)
        const data = await res.json();

    } 
    useEffect(() => {
        const resData = getData();
        setdata(resData);
    }, [url]);

    return {
        data 
    }
};
export default useFatch;