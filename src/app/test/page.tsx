'use client';

import { useEffect } from 'react';
import http from '@/app/http';
import {useState} from 'react';

export default function TestPage() {
   const [ data, setData ] = useState([]);
    useEffect(() => {
        http.get('/view').then((res) => {
            console.log(res.items)
        })
    }, []);


    return (
       <></>
    );
}
