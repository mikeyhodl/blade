import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _PlayCircleIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5547 7.16795C10.2478 6.96338 9.8533 6.94431 9.52814 7.11833C9.20298 7.29235 9 7.63121 9 8V16C9 16.3688 9.20298 16.7077 9.52814 16.8817C9.8533 17.0557 10.2478 17.0366 10.5547 16.8321L16.5547 12.8321C16.8329 12.6466 17 12.3344 17 12C17 11.6656 16.8329 11.3534 16.5547 11.168L10.5547 7.16795ZM14.1972 12L11 14.1315V9.86852L14.1972 12Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const PlayCircleIcon = assignWithoutSideEffects(_PlayCircleIcon, {
  componentId: 'PlayCircleIcon',
});

export default PlayCircleIcon;
