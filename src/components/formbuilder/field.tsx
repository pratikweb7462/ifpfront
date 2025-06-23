"use client";

import React, { useEffect, useId, useMemo } from 'react';
import _ from 'lodash';

import InputField from './fields/input';
import TextareaField from './fields/textarea';
import SelectField from './fields/select';
import CheckboxRadioField from './fields/checkbox-radio';
import InputGroupField from './fields/input-group';
import FileField from './fields/file';
import FormService from '@/services/formbuilder';

export interface FieldPropsType {
    key: string;
    col: number | string;
    type: 'text' | 'input' | 'select' | string;
    properties: Record<string, any>;
    caption: string;
    comments?: string;
    source?: any | any[];
    value: any;
    table_key?: string;
    field_formula?: string;
    required?: string;
    parent?: string | string[];
    parent_type?: string | string[];
    view?: string;
    tab_index?: any;
    errors?: any;
    isMultiFile?: boolean;
    frmDataKey?: string;
    class1?: string;
    class2?: string;
    module?: string;
    childrens?: FieldPropsType[] | null;
}

export class SchemeService {

    private _elmRef: HTMLElement | null;
    private _field: FieldPropsType;
    private _formService: FormService | null;
    private _options: any;

    constructor(field: FieldPropsType, formService: FormService | null = null, options: any = {}) {
        this._field = field;
        this._formService = formService;
        this._options = options || {};
        this._elmRef = null;
    }

    setElmRef(elm: HTMLElement | null) {
        if (elm) {
            this._elmRef = elm;
            if (this._formService) {
                this._formService.addField(elm);
            }
        }
    }

    toFixed(val: any, decimal: number = 0, noComma: boolean = false) {
        val = String(val).replace(/[^\d.-]/g, '');
        if (!val) val = decimal === 0 ? '0' : '0.00';
        const formatted = new Intl.NumberFormat("en-IN", {
            minimumFractionDigits: decimal,
            maximumFractionDigits: decimal,
        }).format(Number(val));
        return noComma ? formatted.replace(/,/g, '') : formatted;
    }

    strToNumber(val: any): any {
        return val ? (val + "").replaceAll(",", "") : val;
    }

    isNumberKey(
        evt: React.KeyboardEvent<HTMLInputElement>,
        fieldType: string = "number",
        value: any = ""
    ) {
        const { key, ctrlKey, metaKey } = evt;
        // Allow navigation and control keys
        if (
            ctrlKey ||
            metaKey ||
            ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(key)
        ) {
            return true;
        }

        // Allow one decimal point for 'amount' type
        if (fieldType === "amount" && key === ".") {
            if (value.includes(".")) {
                evt.preventDefault();
                return false;
            }
            return true;
        }

        // Allow digits 0–9
        if (/^[0-9]$/.test(key)) {
            return true;
        }

        // Block everything else
        evt.preventDefault();
        return false;
    }

    get isMultijson(): boolean {
        if (this._field?.parent_type) {
            if (_.isArray(this._field.parent_type)) {
                return (this._field.parent_type.findIndex((type: string) => type === 'multijson') !== -1);
            } else if (this._field.parent_type === 'multijson') {
                return true;
            }
        }
        return false;
    };

    get type(): string {
        return this._field.type || 'text';
    };

    get name(): string {
        const { properties } = this._field;
        const isMultiple = properties?.multiple || false;
        const name = [];
        name.push(this._field.frmDataKey || 'formdata');
        if (this._field.table_key) name.push(`[${this._field.table_key}]`);
        if (this._field?.parent) {
            const parents = Array.isArray(this._field.parent) ? this._field.parent : [this._field.parent];
            parents.forEach(p => name.push(`[${p}]`));
        }
        name.push(`[${this._field.key}]`);
        if (this.isMultijson && this._field?.parent_type && _.isArray(this._field.parent_type)) {
            const multiCount = this._field.parent_type.filter(pt => pt === 'multijson').length - 1;
            const parentIndex = this._options.parentIndex || [];
            for (let i = 0; i < multiCount; i++) {
                name.push(`[${parentIndex[i] ?? ''}]`);
            }
        }
        if (this.isMultijson) name.push('[]');
        if (this.type == 'checkboxgroup') name.push('[]');
        if (this.type == 'file' && isMultiple) name.push('[]');
        if (this.type == 'select' && isMultiple) name.push('[]');

        return name.join('');
    };

    get id(): string {
        const fId = [];
        if (this._field?.module) {
            fId.push(this._field.module);
        }
        if (this._field?.table_key) {
            fId.push(this._field.table_key + '_');
        }
        fId.push(this._field.key);
        if (this._options?.extraId) {
            fId.push(this._options.extraId);
        }
        return fId.join('');
    };

    get value(): any {
        const { value, properties } = this._field;
        const noComma = properties?.['data-no-comma'];
        const blankAllowed = properties?.['data-blank-allowed']?.toLowerCase() === 'yes';

        if ((this.type === 'number' || this.type === 'amount')) {
            if (blankAllowed && !value) return value;
            const decimal = this.type === 'amount' ? (properties?.['data-decimal'] || 2) : 0;
            return this.toFixed(value, parseInt(decimal + ''), noComma);
        }

        return value ?? '';
    }

    get className(): string {
        const classList = [];
        classList.push('form-control');
        if (['checkbox', 'radio', 'checkboxgroup', 'radiogroup'].includes(this.type)) {
            // remove form-control class for checkbox and radio
            classList.pop();
            classList.push('form-check-input');
        }
        if (this._field.field_formula) classList.push('data-formula');
        if (['number', 'amount'].includes(this.type)) classList.push('text-end');
        // if (this._field.class1) classList.push(this._field.class1);
        // if (this._field.class2) classList.push(this._field.class2);
        if (this._field.errors) classList.push('is-invalid');
        return classList.join(' ');
    };

    get hasViewOnly(): boolean {
        return this._field?.view?.toLowerCase() == 'y' || this._field?.view?.toLowerCase() == 'yes';
    }

    get attrs(): Record<string, any> {
        const { properties = {}, field_formula, required, table_key } = this._field;
        let _properties: any = {};
        // add first level properties required
        if (required?.toLowerCase() === 'y' || required?.toLowerCase() === 'yes') {
            _properties['data-required'] = required;
        }
        _properties = { ..._properties, ...properties };
        const attrs: Record<string, any> = {
            name: this.name,
            id: this.id,
            autoComplete: 'off',
            className: this.className,
            'data-prefix': table_key,
            ..._properties,
        };
        if (this.type === 'number' || this.type === 'amount') {
            attrs[`data-${this.type}`] = 'Y';
        }
        if (attrs.readonly !== undefined) {
            delete attrs.readonly;
            attrs.readOnly = true;
            attrs['data-org-readonly'] = 'Y';
        }
        if (field_formula) {
            attrs.readOnly = true;
        }
        return attrs;
    };

    get label(): string | null {
        return this._field.caption || null;
    }

    get isRequired(): boolean {
        const { required } = this._field;
        return required?.toLowerCase() === 'y' || required?.toLowerCase() === 'yes';
    };

    get source(): any | any[] {
        if (!this._field.source) {
            return [];
        }
        if (_.isArray(this._field.source)) {
            return this._field.source.map((option: any) => ({
                value: option.value === undefined ? Object.keys(option)[0] : option.value,
                label: option.label === undefined ? Object.values(option)[0] : option.label,
                attrs: option.attrs || {},
            }));
        }
        if (_.isObject(this._field.source)) {
            return Object.entries(this._field.source).map(([value, label]) => ({
                value: value,
                label: label,
                attrs: {},
            }));
        }
        return [];
    }

    get field(): FieldPropsType {
        return this._field;
    };

    get formService(): FormService | null | undefined {
        return this._formService;
    };

    get options(): any {
        return this._options;
    }

    get childrens(): FieldPropsType[] | null {
        if (this._field.childrens && _.isArray(this._field.childrens)) {
            return this._field.childrens;
        }
        return null;
    }

};

const defaultProps = {};

export type FieldProps = {
    field: FieldPropsType,
    formService?: FormService | null,
    options?: { extraId?: any, parentIndex?: any[] }
} & typeof defaultProps;

export default function Field({ field, formService, options }: FieldProps) {

    const idRef = useId();
    const scheme = useMemo(() => new SchemeService(field, formService, options), [field, formService, options]);

    useEffect(() => {
        console.log(scheme);
    }, [scheme]);

    if (!scheme) {
        return null;
    }

    const renderField = () => {
        switch (scheme.type) {
            case 'checkboxgroup':
            case 'radiogroup':
                return <InputGroupField key={idRef} scheme={scheme} idRef={idRef} />;
            case 'checkbox':
            case 'radio':
                return <CheckboxRadioField key={idRef} scheme={scheme} idRef={idRef} />;
            case 'select':
                return <SelectField key={idRef} scheme={scheme} idRef={idRef} />;
            case 'textarea':
                return <TextareaField key={idRef} scheme={scheme} idRef={idRef} />;
            case 'file':
                return <FileField key={idRef} scheme={scheme} idRef={idRef} />;
            default:
                return <InputField key={idRef} scheme={scheme} idRef={idRef} />;
        }
    };

    return (
        <div className={`field-item mb-2 col-md-${scheme.field?.col || 12}`}>
            {(!['group', 'multijson'].includes(scheme.type)) && (
                <div className={`form-group ${scheme.type}`}>
                    {(scheme.label && !['checkbox', 'radio'].includes(scheme.type)) && (
                        <label htmlFor={scheme.id} className={`form-label ${scheme.isRequired ? 'required' : ''}`}>
                            {scheme.label}
                        </label>
                    )}
                    {renderField()}
                    {scheme.field.errors && (
                        <div className="invalid-feedback">
                            {scheme.field.errors}
                        </div>
                    )}
                </div>
            )}
            {(scheme.type === 'group') && (
                <div data-type={scheme.type} className={`field-${scheme.type}`}>
                    <div className="group-label form-label">{scheme.label}</div>
                    <div className="group-fields row">
                        {scheme.childrens && scheme.childrens.map((childField: any, index: number) => (
                            <Field key={index} field={childField} formService={formService} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

Field.defaultProps = defaultProps;
