export type IconName = 'arrow-left' | 'arrow-right' | 'close' | 'menu';

interface IconProps {
  className?: string;
  decorative?: boolean;
  name: IconName;
}

const paths: Record<IconName, string[]> = {
  'arrow-left': [
    'M12.9697 5.46967C13.2626 5.17678 13.7374 5.17678 14.0303 5.46967L17.0303 8.46967C17.3232 8.76256 17.3232 9.23744 17.0303 9.53033L14.0303 12.5303C13.7374 12.8232 13.2626 12.8232 12.9697 12.5303C12.6768 12.2374 12.6768 11.7626 12.9697 11.4697L15.4393 9L12.9697 6.53033C12.6768 6.23744 12.6768 5.76256 12.9697 5.46967Z',
    'M0.75 9C0.75 8.58579 1.08579 8.25 1.5 8.25H16.5C16.9142 8.25 17.25 8.58579 17.25 9C17.25 9.41421 16.9142 9.75 16.5 9.75H1.5C1.08579 9.75 0.75 9.41421 0.75 9Z',
  ],
  'arrow-right': [
    'M12.9697 5.46967C13.2626 5.17678 13.7374 5.17678 14.0303 5.46967L17.0303 8.46967C17.3232 8.76256 17.3232 9.23744 17.0303 9.53033L14.0303 12.5303C13.7374 12.8232 13.2626 12.8232 12.9697 12.5303C12.6768 12.2374 12.6768 11.7626 12.9697 11.4697L15.4393 9L12.9697 6.53033C12.6768 6.23744 12.6768 5.76256 12.9697 5.46967Z',
    'M0.75 9C0.75 8.58579 1.08579 8.25 1.5 8.25H16.5C16.9142 8.25 17.25 8.58579 17.25 9C17.25 9.41421 16.9142 9.75 16.5 9.75H1.5C1.08579 9.75 0.75 9.41421 0.75 9Z',
  ],
  close: [
    'm6 6 12 12',
    'M18 6 6 18',
  ],
  menu: [
    'M4 7h16',
    'M4 12h16',
    'M4 17h16',
  ],
};

function Icon({
  className = '',
  decorative = true,
  name,
}: IconProps) {
  const isArrow = name === 'arrow-left' || name === 'arrow-right';
  const arrowTransform = name === 'arrow-left' ? 'translate(18 0) scale(-1 1)' : undefined;

  return (
    <svg
      className={['icon', className].filter(Boolean).join(' ')}
      aria-hidden={decorative ? 'true' : undefined}
      role={decorative ? undefined : 'img'}
      viewBox={isArrow ? '0 0 18 18' : '0 0 24 24'}
      fill="none"
      stroke={isArrow ? undefined : 'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      {isArrow ? (
        <g transform={arrowTransform}>
          {paths[name].map((d) => (
            <path key={d} d={d} fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
          ))}
        </g>
      ) : (
        paths[name].map((d) => (
          <path key={d} d={d} />
        ))
      )}
    </svg>
  );
}

export default Icon;
