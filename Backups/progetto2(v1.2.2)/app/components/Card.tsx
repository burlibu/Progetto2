import Image from 'next/image'

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}


export default function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="relative w-full h-48">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          style={{objectFit: "cover"}}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  )
}
