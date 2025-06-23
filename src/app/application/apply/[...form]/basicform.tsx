'use client';

import Field from "@/components/formbuilder/field";
import FormService from "@/services/formbuilder";
import { useEffect, useMemo, useRef } from "react";
import { Button } from "react-bootstrap";

export default function BasicForm({ formPath, formData }: { formPath: string[], formData: any }) {

    const formRef = useRef<HTMLFormElement>(null);
    const formService = useMemo(() => new FormService(), []);
    const formFields = formData?.fields || [];

    useEffect(() => {
        const init = async () => {
            if (formRef.current && formService) {
                console.log(`FormService initialized for basic form:`, formPath.join('\\'));
                formService.setForm(formRef.current);
            }
        };
        init();
    }, [formPath, formRef, formService]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formRef.current && formService) {
            console.log(`Submitting form:`, formPath.join('\\'));
            await formService.validate()
                .then(() => {
                    if (formService.isValid) {
                        console.log('Form is valid, submitting data...');
                        console.log('Form data:', formService.getFormData());
                    } else {
                        console.log('Form validation failed');
                    }
                }).catch((error) => {
                    console.error('Error during form validation:', error);
                });
        }
    };

    return (
        <>
            <form className="application-form" ref={formRef} onSubmit={handleSubmit}>
                <div className="row">
                    {formFields.map((field: any, index: number) => (
                        <Field key={index} field={field} formService={formService} />
                    ))}
                </div>
                <div className="row">
                    <div className="h-100"></div>
                </div>
                <div className="row">
                    <div className="col">
                        <Button type="submit" variant="success">
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
}