import React, { forwardRef, useEffect, useRef } from 'react';

interface WrapperProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Wrapper = forwardRef(({ className, children, style }: WrapperProps, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div className={className} ref={ref} style={style}>
      {children}
    </div>
  );
});

Wrapper.displayName = 'Wrapper';

interface PopoverProps {
  className?: string;
  onPageClick: (...args: never[]) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  keep?: boolean;
}

const Popover = React.memo<PopoverProps>((props) => {
  const { onPageClick, children } = props;

  // const settingsWindowRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const pageClickEvent = (e: MouseEvent) => {
  //     if (!props.keep || !settingsWindowRef.current?.contains(e.target as Node)) {
  //       onPageClick();
  //     }
  //   };

  //   window.addEventListener('click', pageClickEvent, true);

  //   return () => {
  //     window.removeEventListener('click', pageClickEvent, true);
  //   };
  // });

  const combined: React.CSSProperties = { zIndex: 100, ...props.style };

  return (
    <Wrapper
      className={props.className}
      style={combined}
      // ref={settingsWindowRef}
    >
      {children}
    </Wrapper>
  );
});

Popover.displayName = 'Popover';

export default Popover;
