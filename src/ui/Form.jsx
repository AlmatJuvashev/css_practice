import { twJoin } from "tailwind-merge";

function Form({ customizeForm = false, className, children, ...props }) {
  return (
    <form
      className={twJoin([
        customizeForm ? "" : "rounded-lg shadow-lg",
        className,
      ])}
      {...props}
    >
      {children}
    </form>
  );
}

export function FormRow({
  label,
  customizeParentDiv = false,
  classNameParentDiv,
  customizeLabel = false,
  classNameLabel,
  error,
  children,
}) {
  return (
    <div
      className={twJoin([
        customizeParentDiv ? "" : "grid grid-cols-3",
        classNameParentDiv,
      ])}
    >
      {children}
      {label && (
        <label
          htmlFor={children.props.id}
          className={twJoin([customizeLabel ? "" : "", classNameLabel])}
        >
          {label}
        </label>
      )}
      {error && (
        <span className="text-red-700 font-semibold text-sm">{error}</span>
      )}
    </div>
  );
}

export function FormRowVertical({
  label,
  customizeParentDiv = false,
  classNameParentDiv,
  customizeLabel = false,
  classNameLabel,
  error,
  children,
}) {
  return (
    <div
      className={twJoin(
        customizeParentDiv ? "" : "flex flex-col",
        classNameParentDiv
      )}
    >
      {children}

      {label && (
        <label
          className={twJoin(customizeLabel ? "" : "", classNameLabel)}
          htmlFor={children.props.id}
        >
          {label}
        </label>
      )}
      {error && (
        <span className="text-red-700 font-semibold text-sm">{error}</span>
      )}
    </div>
  );
}

export function FormInput({ className, ...props }) {
  return <input className={twJoin("", className)} {...props} />;
}

Form.FormRow = FormRow;
Form.FormRowVertical = FormRowVertical;
Form.FormInput = FormInput;

export default Form;
