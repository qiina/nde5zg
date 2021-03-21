import React, { useEffect, useState } from 'react';

const RandomString: React.FC = () => {

    const [randomString, setRandomString] = useState(btoa(Math.random().toString(36).slice(-6)).split(''));
    useEffect(() => {
        const interval = setInterval(() => {
            const updatedRandomString = randomString.slice();
            const randomNum = Math.floor(Math.random() * 100);
            const randomIdx = Math.floor(Math.random() * 8);
            if (randomNum >= 50) {
                if (randomNum >= 90) { updatedRandomString[randomIdx] = '?'; }
                else if (randomNum >= 85) { updatedRandomString[randomIdx] = '#'; }
                else { updatedRandomString[randomIdx] = btoa(Math.random().toString(36).slice(-10))[randomIdx]; }
                setRandomString(updatedRandomString);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [])

    return (
        <div>
            <p>{randomString}</p>
        </div>
    );
}
export default RandomString;