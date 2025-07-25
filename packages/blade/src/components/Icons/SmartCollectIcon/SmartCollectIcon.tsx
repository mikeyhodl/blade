import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _SmartCollectIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 9C22.5523 9 23 8.55228 23 8V4C23 2.34315 21.6569 1 20 1H16C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 21.4477 9 22 9ZM1 16C1 15.4477 1.44772 15 2 15C2.55228 15 3 15.4477 3 16V20C3 20.5523 3.44772 21 4 21H8C8.55228 21 9 21.4477 9 22C9 22.5523 8.55228 23 8 23H4C2.34315 23 1 21.6569 1 20V16ZM23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H16C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23H20C21.6569 23 23 21.6569 23 20V16ZM1 8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8V4C3 3.44772 3.44772 3 4 3H8C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1H4C2.34315 1 1 2.34315 1 4V8ZM16 7H8V11H16V7ZM18 11V7C18 5.89543 17.1046 5 16 5H8C6.89543 5 6 5.89543 6 7V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H6V17C6 18.1046 6.89543 19 8 19H16C17.1046 19 18 18.1046 18 17V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H18ZM16 13H8V17H16V13Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const SmartCollectIcon = assignWithoutSideEffects(_SmartCollectIcon, {
  componentId: 'SmartCollectIcon',
});

export default SmartCollectIcon;
