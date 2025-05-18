"use client"

import VideoCard from './VideoCard';

const VideoGrid = () => {
  // Mock data for videos
  const videos = [
    {
      id: '1',
      title: 'Design and Prototype an App with Play - Full 3-Hour Course',
      thumbnail: '/thumbnails/design-app.svg',
      duration: '3:15',
      channel: {
        name: 'DesignCode',
        avatar: '/avatars/designcode.svg',
      },
      views: '15K views',
      timeAgo: '1 month ago',
    },
    {
      id: '2',
      title: 'Create 3D Site with Spline and React - Full Course',
      thumbnail: '/thumbnails/3d-site.svg',
      duration: '12:20',
      channel: {
        name: 'DesignCode',
        avatar: '/avatars/designcode.svg',
      },
      views: '18K views',
      timeAgo: '1 month ago',
    },
    {
      id: '3',
      title: 'How to Use AI Art Generator on Midjourney',
      thumbnail: '/thumbnails/ai-art.svg',
      duration: '16:35',
      channel: {
        name: 'DesignerVest',
        avatar: '/avatars/designervest.svg',
      },
      views: '51K views',
      timeAgo: '1 month ago',
    },
    {
      id: '4',
      title: 'Desktop App UI Design in Figma - Full Course',
      thumbnail: '/thumbnails/desktop-ui.svg',
      duration: '10:15',
      channel: {
        name: 'DesignCode',
        avatar: '/avatars/designcode.svg',
      },
      views: '24K views',
      timeAgo: '1 month ago',
    },
    {
      id: '5',
      title: 'Design and Prototype an App with Play - Full 3-Hour Course',
      thumbnail: '/thumbnails/prototype-app.svg',
      duration: '5:00',
      channel: {
        name: 'DesignCode',
        avatar: '/avatars/designcode.svg',
      },
      views: '11K views',
      timeAgo: '1 month ago',
    },
    {
      id: '6',
      title: 'Build a 3D Site Without Code with Framer - Crash Course',
      thumbnail: '/thumbnails/3d-site-framer.svg',
      duration: '14:30',
      channel: {
        name: 'DesignerVest',
        avatar: '/avatars/designervest.svg',
      },
      views: '19K views',
      timeAgo: '1 month ago',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {videos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
};

export default VideoGrid;
