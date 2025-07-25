import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _FullScreenEnterIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5C2 3.34315 3.34315 2 5 2H8C8.55228 2 9 2.44772 9 3C9 3.55228 8.55228 4 8 4H5C4.44772 4 4 4.44772 4 5V8C4 8.55228 3.55228 9 3 9C2.44772 9 2 8.55228 2 8V5ZM15 3C15 2.44772 15.4477 2 16 2H19C20.6569 2 22 3.34315 22 5V8C22 8.55228 21.5523 9 21 9C20.4477 9 20 8.55228 20 8V5C20 4.44772 19.5523 4 19 4H16C15.4477 4 15 3.55228 15 3ZM3 15C3.55228 15 4 15.4477 4 16V19C4 19.5523 4.44772 20 5 20H8C8.55228 20 9 20.4477 9 21C9 21.5523 8.55228 22 8 22H5C3.34315 22 2 20.6569 2 19V16C2 15.4477 2.44772 15 3 15ZM21 15C21.5523 15 22 15.4477 22 16V19C22 20.6569 20.6569 22 19 22H16C15.4477 22 15 21.5523 15 21C15 20.4477 15.4477 20 16 20H19C19.5523 20 20 19.5523 20 19V16C20 15.4477 20.4477 15 21 15Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const FullScreenEnterIcon = assignWithoutSideEffects(_FullScreenEnterIcon, {
  componentId: 'FullScreenEnterIcon',
});

export default FullScreenEnterIcon;
