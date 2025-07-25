import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _CornerUpLeftIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.70711 4.70711C10.0976 4.31658 10.0976 3.68342 9.70711 3.29289C9.31658 2.90237 8.68342 2.90237 8.29289 3.29289L3.29289 8.29289C2.90237 8.68342 2.90237 9.31658 3.29289 9.70711L8.29289 14.7071C8.68342 15.0976 9.31658 15.0976 9.70711 14.7071C10.0976 14.3166 10.0976 13.6834 9.70711 13.2929L6.41421 10H16C17.6569 10 19 11.3431 19 13V20C19 20.5523 19.4477 21 20 21C20.5523 21 21 20.5523 21 20V13C21 10.2386 18.7614 8 16 8H6.41421L9.70711 4.70711Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const CornerUpLeftIcon = assignWithoutSideEffects(_CornerUpLeftIcon, {
  componentId: 'CornerUpLeftIcon',
});

export default CornerUpLeftIcon;
