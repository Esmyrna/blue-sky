import  { useState, useEffect } from 'react';
import { Container } from './style';
 
function Time(): JSX.Element {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  
  return (
    <Container>
      <p>{currentDate.toLocaleDateString()}</p>
      <p>{currentDate.toLocaleTimeString()}</p>
    </Container>
  );
}

export default Time;
