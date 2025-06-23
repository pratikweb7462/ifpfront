"use client";

import { useRef } from "react";

export default function CheckboxRadioField({ scheme }: any) {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const normalizedValue = String(scheme.value + '').toLowerCase();
    const isChecked = ['true', '1', 'on', 'yes', 'checked'].includes(normalizedValue);
    const isDisabled = scheme.hasViewOnly || scheme.attrs?.disabled || scheme.attrs?.readOnly;

    return (
        <div className="form-check">
            <input
                ref={(el) => {
                    if (el && !inputRef.current) {
                        inputRef.current = el;
                        scheme.setElmRef(el);
                    }
                }}
                type={scheme.type}
                tabIndex={scheme.field.tab_index}
                {...scheme.attrs}
                defaultChecked={isChecked}
                disabled={isDisabled}
            />
            <label className="form-check-label" htmlFor={scheme.id}>
                {scheme.label}
            </label>
        </div>
    );
}

