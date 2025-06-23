"use client";

import _ from "lodash";
import { useRef } from "react";

export default function SelectField({ scheme }: any) {

    const inputRef = useRef<HTMLSelectElement | null>(null);

    return (
        (scheme.hasViewOnly || scheme.attrs.readOnly)
            ? <>
                <div className={"view-field text-start"}>
                    {scheme.value && scheme.source.length > 0
                        ? scheme.source.filter((option: any) => (
                            (_.isArray(scheme.value) && scheme.value.includes(option.value)) ||
                            scheme.value === option.value
                        )).map((option: any) => option.label).join(', ')
                        : scheme.value}
                </div>
                {scheme.attrs.readOnly ? (
                    <input
                        type="hidden"
                        {...scheme.attrs}
                        name={scheme.name}
                        defaultValue={scheme.value}
                    />
                ) : null}
            </>
            : <select
                ref={(el) => {
                    if (el && !inputRef.current) {
                        inputRef.current = el;
                        scheme.setElmRef(el);
                    }
                }}
                tabIndex={scheme.field.tab_index}
                {...scheme.attrs}
                defaultValue={(scheme.attrs?.multiple) ? scheme.value || [] : scheme.value || ''}>
                {scheme.source.map((option: any, index: number) => (
                    <option key={index} value={option.value} {...option.attrs}>{option.label}</option>
                ))}
            </select>
    );
}