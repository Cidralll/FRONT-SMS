import { useEffect, useState } from 'react';
import SendMsg from "../API/send-msg";
import './time.scss';

export default function Time() {

    let [time, setTime] = useState(`00:00:00`);

    let [status, setStatus] = useState('1');

    useEffect(() => {
        teste();
    },[status])
    
    
    function teste() {
        if (status === '2') {
            setInterval (function () {

                let newDate = new Date();
        
                let hour = newDate.getHours();
                let minute1 = newDate.getMinutes();
                let second1 = newDate.getSeconds();
        
                let minute = addZero(minute1);
                let second = addZero(second1);
        
                let timeToSend = `${hour}:${minute}:${second}`;
                
                if (timeToSend === `${process.env.REACT_APP_HORARIO_ENVIO}`) {
                    SendMsg();
                    setTime(`${hour}:${minute}:${second}`);
                    
                }else {
                    setTime(`${hour}:${minute}:${second}`);
                }
        
                
            }, 1000)
        }

        setStatus('2');
    }

    function addZero(number: number) {
        if (number < 10) {
            let number2 = '0' + number;
            return number2;
        }else {
            return number;
        }
    }

    return (
        <section className="sectionTime">
            <h1 className="time">{time}</h1>
        </section>
    )
}