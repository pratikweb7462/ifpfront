"use client";

import { useRef } from "react";

export default function InputField({ scheme }: any) {

    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
        (scheme.hasViewOnly)
            ? <div className={"view-field text-start"}>{scheme.value}</div>
            : <input
                ref={(el) => {
                    if (el && !inputRef.current) {
                        inputRef.current = el;
                        scheme.setElmRef(el);
                    }
                }}
                type={(['number', 'amount'].includes(scheme.type) ? 'text' : scheme.type)}
                tabIndex={scheme.field.tab_index}
                {...scheme.attrs}
                defaultValue={scheme.value}
            />
    );
}

