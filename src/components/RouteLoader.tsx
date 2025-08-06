'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return <div className='bg-primary fixed top-0 left-0 z-50 h-1 w-full animate-pulse' />;
}
