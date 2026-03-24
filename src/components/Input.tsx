export default function Input({ 
  id, 
  value, 
  onChange, 
  placeholder 
}: { 
  id?: string; 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  placeholder?: string; 
}) {
  return (
    <input 
      id={id}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
    />
  );
}
