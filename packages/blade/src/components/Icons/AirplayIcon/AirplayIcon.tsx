import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _AirplayIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V14C21 14.5523 20.5523 15 20 15H19C18.4477 15 18 15.4477 18 16C18 16.5523 18.4477 17 19 17H20C21.6569 17 23 15.6569 23 14V4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V14C1 15.6569 2.34315 17 4 17H5C5.55228 17 6 16.5523 6 16C6 15.4477 5.55228 15 5 15H4C3.44772 15 3 14.5523 3 14V4Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7682 13.3598C12.5782 13.1318 12.2968 13 12 13C11.7032 13 11.4218 13.1318 11.2318 13.3598L6.23179 19.3598C5.98339 19.6579 5.92984 20.0728 6.09442 20.4242C6.259 20.7755 6.61199 21 7.00001 21H17C17.388 21 17.741 20.7755 17.9056 20.4242C18.0702 20.0728 18.0166 19.6579 17.7682 19.3598L12.7682 13.3598ZM12 15.562L14.865 19H9.13505L12 15.562Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const AirplayIcon = assignWithoutSideEffects(_AirplayIcon, {
  componentId: 'AirplayIcon',
});

export default AirplayIcon;
