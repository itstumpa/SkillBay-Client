import React from 'react';

const Loading = () => {
       return (
              <div className='flex items-center justify-center space-x-2 '>
                     {/* <div className="flex items-center justify-center space-x-2">
	<div className="w-4 h-4 rounded-full animate-pulse dark:bg-emerald-600"></div>
	<div className="w-4 h-4 rounded-full animate-pulse dark:bg-emerald-600"></div>
	<div className="w-4 h-4 rounded-full animate-pulse dark:bg-emerald-600"></div>
</div> */}

<span className="loading loading-dots loading-lg"></span>
              </div>
       );
};

export default Loading;