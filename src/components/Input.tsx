interface InputProps {
    placeholder: string;
}
export default function Input({ placeholder }: InputProps) {
  return (
    <input
      placeholder={placeholder}
      className="w-full bg-transparent p-2 font-normal text-xl text-slate-50 placeholder:text-zinc-700 border-slate-500 border-2 rounded-lg outline-none"
      type="text"
    />
  );
}
