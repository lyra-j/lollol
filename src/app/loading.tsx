import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-20'>
      <Loader2 className='animate-spin text-primary w-8 h-8' />
    </div>
  );
};

export default Loading;
