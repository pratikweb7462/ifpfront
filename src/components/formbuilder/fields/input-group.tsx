"use client";

import _ from "lodash";
import { useRef } from "react";

export default function InputGroupField({ scheme }: any) {

    const inputRef = useRef<HTMLInputElement[]>([]);
    const isDisabled = scheme.hasViewOnly || scheme.attrs?.disabled || scheme.attrs?.readOnly;

    return (
        scheme.source.map((option: any, index: number) => (
            <div className="form-check" key={index}>
                <input
                    ref={(el) => {
                        if (el && !inputRef.current.includes(el)) {
                            inputRef.current.push(el);
                            scheme.setElmRef(el);
                        }
                    }}
                    type={scheme.type === 'checkboxgroup' ? 'checkbox' : 'radio'}
                    tabIndex={scheme.field.tab_index}
                    {...{ ...scheme.attrs, id: scheme.id + '_' + index }}
                    value={option.value}
                    defaultChecked={
                        (_.isArray(scheme.value) && scheme.value.includes(option.value)) ||
                        scheme.value === option.value
                    }
                    disabled={isDisabled}
                    {...option.attrs}
                />
                <label className="form-check-label" htmlFor={scheme.id + '_' + index}>
                    {option.label}
                </label>
            </div>
        ))
    );
}

