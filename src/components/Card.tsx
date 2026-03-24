export default function Card({ 
  title, 
  children, 
  image, 
  imageAlt, 
  variant = 'default' 
}: { 
  title: string; 
  children: React.ReactNode; 
  image?: string; 
  imageAlt?: string; 
  variant?: 'default' | 'elevated' 
}) {
  return (
    <div className={`rounded-lg overflow-hidden ${variant === 'elevated' ? 'shadow-lg bg-white dark:bg-gray-800' : 'border border-gray-200 dark:border-gray-700'}`}>
      {image && <img src={image} alt={imageAlt || title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <div className="text-gray-600 dark:text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}
