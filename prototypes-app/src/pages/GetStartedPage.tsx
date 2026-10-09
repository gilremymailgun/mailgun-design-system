import { useEffect, useRef, useState } from 'react';
import { Page } from '@ds/patterns/Page/Page';
import './get-started.css';

declare global {
  interface Window {
    GetStarted?: {
      mount: (target: HTMLElement) => unknown;
    };
  }
}

export const GetStartedPage = () => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let isMounted = true;
    const script = document.createElement('script');
    script.src = new URL('./get-started.js', import.meta.url).href;
    script.onload = () => {
      if (!isMounted) return;
      if (!window.GetStarted) {
        setError('The Get started guide could not be initialized.');
        return;
      }

      const mountPoint = document.createElement('div');
      host.append(mountPoint);
      try {
        window.GetStarted.mount(mountPoint);
      } catch (mountError) {
        mountPoint.remove();
        setError(mountError instanceof Error ? mountError.message : String(mountError));
      }
    };
    script.onerror = () => {
      if (isMounted) setError('The Get started guide failed to load.');
    };
    document.body.append(script);

    return () => {
      isMounted = false;
      script.remove();
      host.replaceChildren();
    };
  }, []);

  return (
    <Page
      navigationProps={{ defaultActive: 'get-started' }}
    >
      <div ref={hostRef} />
      {error && <p role="alert">{error}</p>}
    </Page>
  );
};

export default GetStartedPage;
