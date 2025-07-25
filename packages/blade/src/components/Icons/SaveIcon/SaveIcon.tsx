import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _SaveIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V8C22 7.73478 21.8946 7.48043 21.7071 7.29289L16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2H5ZM5 4C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H6V13C6 12.4477 6.44772 12 7 12H17C17.5523 12 18 12.4477 18 13V20H19C19.5523 20 20 19.5523 20 19V8.41421L15.5858 4H8V7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H7C6.44772 9 6 8.55228 6 8V4H5ZM8 14V20H16V14H8Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const SaveIcon = assignWithoutSideEffects(_SaveIcon, {
  componentId: 'SaveIcon',
});

export default SaveIcon;
