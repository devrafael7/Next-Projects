type DefaultInputProps = {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DefaultInput( {label, placeholder}: DefaultInputProps) {
  return (
    <div className="w-full flex flex-col items-start">
      <h3 className="font-semibold text-md">{label}</h3>
      <input
        className="px-4 w-full h-14 rounded-xl bg-gray-300 text-lg"
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
}
