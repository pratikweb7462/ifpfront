/* 
Author: Zankat Kalpesh
Email: zankatkalpesh@gmail.com
*/
"use client";

import { useVisibility } from '@/hooks';

export default function Visibility(props: any) {

    const { children, options } = props;
    const [ref, isVisible, setVisible] = useVisibility(options);

    return children(ref, isVisible, setVisible);

}

