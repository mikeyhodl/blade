import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const BookIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 2a1 1 0 0 0-1-1H6.5A3.5 3.5 0 0 0 3 4.5v15A3.5 3.5 0 0 0 6.5 23H20a1 1 0 0 0 1-1V2ZM5 4.5A1.5 1.5 0 0 1 6.5 3H19v13H6.5c-.537 0-1.045.12-1.5.337V4.5Zm0 15A1.5 1.5 0 0 0 6.5 21H19v-3H6.5A1.5 1.5 0 0 0 5 19.5Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default BookIcon;
