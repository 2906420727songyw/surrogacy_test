'use client';

import { useEffect } from 'react';
import http from '@/app/http';


export default function TestPage() {
   
    useEffect(() => {
        http.get('/test').then((res) => {
            console.log(res)
        })
    }, []);


    return (
       <></>
    );
}
