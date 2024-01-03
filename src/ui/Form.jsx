import { twJoin } from 'tailwind-merge';

function Form({ className, children, ...props }) {
  return (
    <form
      className={twJoin(['bg-gray-200 rounded-lg shadow-lg', className])}
      {...props}
    >
      {children}
    </form>
  );
}

export function FormRow({ label, error, children }) {
  return (
    <div className="grid grid-cols-3">
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && (
        <span className="text-red-700 font-semibold text-sm">{error}</span>
      )}
    </div>
  );
}

export function FormRowVertical({ label, error, children }) {
  return (
    <div className="flex flex-col">
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && (
        <span className="text-red-700 font-semibold text-sm">{error}</span>
      )}
    </div>
  );
}

export function FormInput({ className, ...props }) {
  return <input className={twJoin('', className)} {...props} />;
}

Form.FormRow = FormRow;
Form.FormRowVertical = FormRowVertical;
Form.FormInput = FormInput;

export default Form;
