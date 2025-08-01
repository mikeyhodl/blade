import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _TestIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75 4H9.25023V9.01733L6.36836 13.8192C6.36092 13.8311 6.35374 13.843 6.3468 13.8552L3.49967 18.5992C3.34027 18.8646 3.25417 19.1677 3.25015 19.4773C3.24613 19.7871 3.32442 20.0924 3.47703 20.362C3.62964 20.6316 3.8511 20.8559 4.11876 21.0119C4.38634 21.1679 4.69083 21.25 5.00054 21.25H20.0012C20.3108 21.2497 20.6148 21.1673 20.8822 21.0111C21.1495 20.8549 21.3707 20.6306 21.523 20.3611C21.6754 20.0915 21.7535 19.7863 21.7494 19.4767C21.7453 19.1671 21.6591 18.8642 21.4996 18.5988L15.7502 9.01737V4H16.25C16.8023 4 17.25 3.55228 17.25 3C17.25 2.44772 16.8023 2 16.25 2H8.75C8.19772 2 7.75 2.44772 7.75 3C7.75 3.55228 8.19772 4 8.75 4ZM7.82787 15.2739L5.44161 19.25H19.558L18.3822 17.2906C16.8945 17.6706 14.7681 17.6445 12.0483 16.2674C10.2193 15.3421 8.82035 15.1787 7.82787 15.2739ZM17.2862 15.4641L13.8928 9.80891C13.7995 9.65348 13.7502 9.47563 13.7502 9.29437V4H11.2502V9.29437C11.2502 9.47566 11.201 9.65353 11.1077 9.80897L9.02409 13.2807C10.1553 13.3802 11.4662 13.7315 12.9512 14.4828C14.8343 15.4364 16.2713 15.5851 17.2862 15.4641Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const TestIcon = assignWithoutSideEffects(_TestIcon, {
  componentId: 'TestIcon',
});

export default TestIcon;
