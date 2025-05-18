import Image from 'next/image';
import Link from 'next/link';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  channel: {
    name: string;
    avatar?: string;
  };
  views: string;
  timeAgo: string;
}

const VideoCard = ({ id, title, thumbnail, duration, channel, views, timeAgo }: VideoCardProps) => {
  return (
    <div className="group">
      <Link href={`/video/${id}`} className="block">
        <div className="relative rounded-xl overflow-hidden aspect-video mb-3">
          <div className="absolute inset-0 bg-black">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {duration}
          </div>
        </div>
      </Link>
      
      <div className="flex gap-3">
        <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
          {channel.avatar ? (
            <Image
              src={channel.avatar}
              alt={channel.name}
              width={36}
              height={36}
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-purple-500 flex items-center justify-center text-white">
              {channel.name.charAt(0)}
            </div>
          )}
        </div>
        
        <div>
          <h3 className="text-white font-medium line-clamp-2 text-sm leading-tight mb-1">
            {title}
          </h3>
          <p className="text-gray-400 text-xs">{channel.name}</p>
          <p className="text-gray-400 text-xs">{views} • {timeAgo}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
