import React, { useEffect, useState } from 'react';

const DisplayDate: React.FC = () => {

    const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(currentDate => new Date().toLocaleString())
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div>{currentDate}</div>
    );
}
export default DisplayDate;