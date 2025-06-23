"use client";

import { useRef } from "react";

export default function TextareaField({ scheme }: any) {

    const inputRef = useRef<HTMLTextAreaElement | null>(null);

    return (
        (scheme.hasViewOnly)
            ? <div className={"view-field text-start"}>{scheme.value}</div>
            : <textarea
                ref={(el) => {
                    if (el && !inputRef.current) {
                        inputRef.current = el;
                        scheme.setElmRef(el);
                    }
                }}
                tabIndex={scheme.field.tab_index}
                {...scheme.attrs}
                defaultValue={scheme.value}
            />
    );
}