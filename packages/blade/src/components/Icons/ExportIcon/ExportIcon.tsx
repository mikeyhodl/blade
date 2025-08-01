import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _ExportIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 11C4.55228 11 5 11.4477 5 12V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V12C19 11.4477 19.4477 11 20 11C20.5523 11 21 11.4477 21 12V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V12C3 11.4477 3.44772 11 4 11Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2929 1.29289C11.6834 0.902369 12.3166 0.902369 12.7071 1.29289L16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711C16.3166 7.09763 15.6834 7.09763 15.2929 6.70711L12 3.41421L8.70711 6.70711C8.31658 7.09763 7.68342 7.09763 7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289L11.2929 1.29289Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C12.5523 1 13 1.44772 13 2V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V2C11 1.44772 11.4477 1 12 1Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const ExportIcon = assignWithoutSideEffects(_ExportIcon, {
  componentId: 'ExportIcon',
});

export default ExportIcon;
