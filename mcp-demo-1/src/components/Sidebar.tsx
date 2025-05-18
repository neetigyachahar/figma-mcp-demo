import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  const menuItems = [
    { name: 'Home', icon: 'home', active: true },
    { name: 'Shorts', icon: 'shorts' },
    { name: 'Subscriptions', icon: 'subscriptions' },
    { name: 'Papaya Music', icon: 'music' },
  ];

  const myChannelItems = [
    { name: 'Library', icon: 'library' },
    { name: 'History', icon: 'history' },
    { name: 'Your Videos', icon: 'videos' },
    { name: 'Watch Later', icon: 'clock' },
    { name: 'Downloads', icon: 'download' },
    { name: 'Show More', icon: 'chevron-down' },
  ];

  const subscriptionItems = [
    { name: 'DesignCode', icon: 'channel', avatar: '/avatars/designcode.svg' },
    { name: 'Figma', icon: 'channel', avatar: '/avatars/figma.svg' },
    { name: 'Sketch', icon: 'channel', avatar: '/avatars/sketch.svg' },
    { name: 'Spline', icon: 'channel', avatar: '/avatars/spline.svg' },
  ];

  return (
    <aside className="w-64 h-screen bg-[#1E1E1E] text-white flex flex-col overflow-y-auto">
      <div className="p-6 flex items-center gap-3">
        <div className="text-xl font-bold">Papaya</div>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link 
                href="#" 
                className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                  item.active ? 'bg-[#2D2D2D]' : 'hover:bg-[#2D2D2D]'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  {item.name === 'Home' && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                  )}
                  {item.name === 'Shorts' && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                      <line x1="7" y1="2" x2="7" y2="22"></line>
                      <line x1="17" y1="2" x2="17" y2="22"></line>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                    </svg>
                  )}
                  {item.name === 'Subscriptions' && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  )}
                  {item.name === 'Papaya Music' && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M9 18V5l12-2v13"></path>
                      <circle cx="6" cy="18" r="3"></circle>
                      <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                  )}
                </div>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="mt-6">
          <h3 className="px-6 text-xs uppercase text-gray-400 font-semibold mb-2">My Channel</h3>
          <ul className="space-y-1 px-3">
            {myChannelItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href="#" 
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#2D2D2D]"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    {item.name === 'Library' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                    )}
                    {item.name === 'History' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M12 8v4l3 3"></path>
                        <path d="M3.05 11a9 9 0 1 1 .5 4"></path>
                        <path d="M3 16V8h8"></path>
                      </svg>
                    )}
                    {item.name === 'Your Videos' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <polygon points="23 7 16 12 23 17 23 7"></polygon>
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                      </svg>
                    )}
                    {item.name === 'Watch Later' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    )}
                    {item.name === 'Downloads' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    )}
                    {item.name === 'Show More' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    )}
                  </div>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-6">
          <h3 className="px-6 text-xs uppercase text-gray-400 font-semibold mb-2">Subscriptions</h3>
          <ul className="space-y-1 px-3">
            {subscriptionItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href="#" 
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#2D2D2D]"
                >
                  <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
                    {item.avatar ? (
                      <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                        {item.name.charAt(0)}
                      </div>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    )}
                  </div>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
