import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _WifiIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M1.66126 10.7475C7.32983 5.75083 15.8302 5.75083 21.4988 10.7475C21.9131 11.1127 22.545 11.0729 22.9102 10.6586C23.2754 10.2443 23.2356 9.61238 22.8213 9.24718C16.3969 3.58427 6.76314 3.58427 0.338762 9.24718C-0.0755428 9.61238 -0.115352 10.2443 0.249847 10.6586C0.615045 11.0729 1.24696 11.1127 1.66126 10.7475Z"
        fill={iconColor}
      />
      <Path
        d="M5.2201 14.3158C8.92791 11.2274 14.3123 11.2274 18.0201 14.3158C18.4445 14.6692 19.075 14.6117 19.4285 14.1874C19.7819 13.763 19.7245 13.1325 19.3001 12.779C14.8507 9.07301 8.38948 9.07301 3.9401 12.779C3.51574 13.1325 3.45827 13.763 3.81173 14.1874C4.16519 14.6117 4.79574 14.6692 5.2201 14.3158Z"
        fill={iconColor}
      />
      <Path
        d="M14.4809 17.9225C12.7469 16.6905 10.4233 16.6905 8.68923 17.9225C8.239 18.2424 7.61472 18.1367 7.29486 17.6864C6.97499 17.2362 7.08067 16.6119 7.5309 16.2921C9.95853 14.5674 13.2116 14.5674 15.6392 16.2921C16.0895 16.6119 16.1951 17.2362 15.8753 17.6864C15.5554 18.1367 14.9311 18.2424 14.4809 17.9225Z"
        fill={iconColor}
      />
      <Path
        d="M12 22C12.5523 22 13 21.5523 13 21C13 20.4477 12.5523 20 12 20C11.4477 20 11 20.4477 11 21C11 21.5523 11.4477 22 12 22Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const WifiIcon = assignWithoutSideEffects(_WifiIcon, {
  componentId: 'WifiIcon',
});

export default WifiIcon;
