import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _UploadIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.2929 1.29289C11.6834 0.902369 12.3166 0.902369 12.7071 1.29289L16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711C16.3166 7.09763 15.6834 7.09763 15.2929 6.70711L13 4.41421V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V4.41421L8.70711 6.70711C8.31658 7.09763 7.68342 7.09763 7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289L11.2929 1.29289Z"
        fill={iconColor}
      />
      <Path
        d="M3 16C3.55228 16 4 16.4477 4 17V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V17C20 16.4477 20.4477 16 21 16C21.5523 16 22 16.4477 22 17V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V17C2 16.4477 2.44772 16 3 16Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const UploadIcon = assignWithoutSideEffects(_UploadIcon, {
  componentId: 'UploadIcon',
});

export default UploadIcon;
