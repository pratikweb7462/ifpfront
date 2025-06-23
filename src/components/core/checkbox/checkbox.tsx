import Form from "react-bootstrap/Form";

export default function CheckBox({
  label = "default checkbox",
  id = "default-checkbox",
}) {
  return (
    <div className="FilterCheckBox">
      <Form.Check type="checkbox" id={id} label={label} />
    </div>
  );
}
