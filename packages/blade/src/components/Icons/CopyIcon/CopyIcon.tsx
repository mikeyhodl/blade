import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _CopyIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 4C3 3.44772 3.44772 3 4 3H13C13.5523 3 14 3.44772 14 4V5C14 5.55228 14.4477 6 15 6C15.5523 6 16 5.55228 16 5V4C16 2.34315 14.6569 1 13 1H4C2.34315 1 1 2.34315 1 4V13C1 14.6569 2.34315 16 4 16H5C5.55228 16 6 15.5523 6 15C6 14.4477 5.55228 14 5 14H4C3.44772 14 3 13.5523 3 13V4Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 8C9.34315 8 8 9.34315 8 11V20C8 21.6569 9.34315 23 11 23H20C21.6569 23 23 21.6569 23 20V11C23 9.34315 21.6569 8 20 8H11ZM10 11C10 10.4477 10.4477 10 11 10H20C20.5523 10 21 10.4477 21 11V20C21 20.5523 20.5523 21 20 21H11C10.4477 21 10 20.5523 10 20V11Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const CopyIcon = assignWithoutSideEffects(_CopyIcon, {
  componentId: 'CopyIcon',
});

export default CopyIcon;
