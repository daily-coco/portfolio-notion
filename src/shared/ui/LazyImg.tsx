import { useEffect, useRef, useState } from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export default function LazyImg({ src, alt = '', ...rest }: Props) {
  const ref = useRef<HTMLImageElement | null>(null);
  const [ready, setReady] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setReady(true);
          io.disconnect();
        }
      },
      { rootMargin: '600px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <img
      key={src}
      ref={ref}
      src={ready ? src : undefined}
      data-src={src}
      alt={alt}
      loading='lazy'
      decoding='async'
      onLoad={() => setLoaded(true)}
      style={{
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        opacity: loaded ? 1 : 0,
        transition: 'opacity 200ms ease',
      }}
      {...rest}
    />
  );
}
