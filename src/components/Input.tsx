interface InputProps {
  placeholder: string;
  name: string;
  autoComplete: string;
  type: string;
}
export default function Input({ placeholder, name, autoComplete, type }: InputProps) {
  return (
    <input
      name={name}
      required={true}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className="w-full horizontal:text-xs bg-transparent p-2 font-normal text-base lg:text-xl text-zinc-700 dark:text-slate-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-700 border-zinc-500 border-2 rounded-lg outline-none"
      type={type}
    />
  );
}
