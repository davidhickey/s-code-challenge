export interface InputElProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
const InputEl = ({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  className="form-input flex w-full min-w-0 flex-1 resize-none border border-solid border-[#f0f2f4] rounded-sm text-[#0e141b] focus:outline-0 focus:ring-0 bg-[#e7edf3] h-14 placeholder:text-[#4e7397] p-4 text-base font-normal leading-normal",
}: InputElProps) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

export default InputEl;
