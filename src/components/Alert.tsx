export default function Alert({ 
  title, 
  children, 
  variant = 'info' 
}: { 
  title: string; 
  children: React.ReactNode; 
  variant?: 'error' | 'success' | 'warning' | 'info'; 
}) {
  const variants = {
    error: "bg-red-50 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
    success: "bg-green-50 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800",
    info: "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800",
  };

  return (
    <div className={`p-4 rounded-lg border ${variants[variant]} mb-4`}>
      <h4 className="font-bold mb-1">{title}</h4>
      <p>{children}</p>
    </div>
  );
}
