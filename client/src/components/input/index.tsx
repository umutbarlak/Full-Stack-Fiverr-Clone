type Props = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  type?: "text" | "number" | "file" | "textarea" | "email" | "password";
  min?: number;
  max?: number;
  isMulti?: boolean;
};

const Input = ({
  label,
  name,
  disabled = false,
  placeholder,
  type = "text",
  required = false,
  min,
  max,
  isMulti,
}: Props) => {
  return (
    <div className="mb-5">
      <label className="mb-2 text-sm font-medium text-gray-900" htmlFor={name}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          disabled={disabled}
          id={name}
          name={name}
          required={required}
          className="input-field min-h-[100px] max-h-[200px]"
        />
      ) : (
        <input
          className="input-field"
          id={name}
          name={name}
          type={type}
          min={min}
          max={max}
          multiple={isMulti}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    </div>
  );
};

export default Input;
