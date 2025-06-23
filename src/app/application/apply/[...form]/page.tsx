import { Http } from "@/core/services/HttpService";
import BasicForm from "./basicform";
import WizardForm from "./wizardform";

async function fetchFormData(formPath: string[]) {
  return Http.get(`apiv1/api-forms`, {
    params: {
      form: formPath.join('\\'),
    },
  })
    .then((response) => response)
    .catch((error) => {
      console.error('Error fetching form data:', error);
      throw error;
    });
}

export default async function FormPage({ params }:any ) {
  const { form } = params;

  const formData = await fetchFormData(form);

  return (
    <div className="container" id="form-container">
      {formData.form_type === 'wizard' ? (
        <WizardForm formPath={form} formData={formData} />
      ) : (
        <BasicForm formPath={form} formData={formData} />
      )}
    </div>
  );
}