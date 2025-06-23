'use client';

import Field from "@/components/formbuilder/field";
import { useStateMounted } from "@/hooks";
import FormService from "@/services/formbuilder";
import { useEffect, useMemo, useRef } from "react";
import { Button, Nav, Tab, Tabs } from "react-bootstrap";

export default function WizardForm({ formPath, formData }: { formPath: string[], formData: any }) {

    const formRef = useRef<HTMLFormElement>(null);
    const formService = useMemo(() => new FormService(), []);
    const formFields = formData?.fields || [];
    const [activeKey, setActiveKey] = useStateMounted(formFields?.[0]?.key || '');

    useEffect(() => {
        const init = async () => {
            if (formRef.current && formService) {
                console.log(`FormService initialized for wizard form:`, formPath.join('\\'));
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

    const currentIndex = formFields.findIndex((f: any) => f.key === activeKey);
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === formFields.length - 1;

    const handleNext = () => {
        if (!isLast) {
            setActiveKey(formFields[currentIndex + 1].key);
        }
    };

    const handlePrev = () => {
        if (!isFirst) {
            setActiveKey(formFields[currentIndex - 1].key);
        }
    };

    return (
        <>
            <form className="application-form" ref={formRef} onSubmit={handleSubmit}>
                <Nav variant="tabs" activeKey={activeKey}>
                    {formFields.map((field: any) => (
                        <Nav.Item key={field.key}>
                            <Nav.Link
                                eventKey={field.key}
                                active={activeKey === field.key}
                                onClick={(e) => e.preventDefault()}
                            >
                                {field.caption}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
                {formFields.map((field: any, index: number) => (
                    <div
                        key={field.key}
                        style={{ display: activeKey === field.key ? 'block' : 'none' }}>
                        <div className="row mt-3">
                            {field.childrens?.map((childField: any, idx: number) => (
                                <Field key={idx} field={childField} formService={formService} />
                            ))}
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                            {!isFirst && (
                                <Button type="button" variant="secondary" onClick={handlePrev}>Previous</Button>
                            )}
                            {!isLast ? (
                                <Button type="button" variant="primary" onClick={handleNext}>Next</Button>
                            ) : (
                                <Button type="submit" variant="success">Submit</Button>
                            )}
                        </div>
                    </div>
                ))}
            </form>
        </>
    );
}