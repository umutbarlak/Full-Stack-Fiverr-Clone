import { ICategory } from "../../types";

type Props = {
  label: string;
  options: ICategory[];
  name?: string;
};

const Select = ({ label, options, name }: Props) => {
  return (
    <div className="flex flex-col mb-5">
      <label className="text-sm font-medium text-gray-900" htmlFor={name}>
        {label}
      </label>
      <select className="input-field" name={name} id={name}>
        {options.map((option, key) => (
          <option value={option.name} key={key}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
