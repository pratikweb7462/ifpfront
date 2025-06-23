"use client";

import { useRef } from "react";

export default function FileField({ scheme }: any) {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const isDisabled = scheme.hasViewOnly || scheme.attrs?.disabled || scheme.attrs?.readOnly;

    return (
        (scheme.hasViewOnly)
            ? null
            : <input
                ref={(el) => {
                    if (el && !inputRef.current) {
                        inputRef.current = el;
                        scheme.setElmRef(el);
                    }
                }}
                type="file"
                tabIndex={scheme.field.tab_index}
                {...scheme.attrs}
                multiple={scheme.attrs?.multiple}
                disabled={isDisabled}
            />
    );
}

