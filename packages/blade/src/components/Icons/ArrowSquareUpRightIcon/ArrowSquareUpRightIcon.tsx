import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _ArrowSquareUpRightIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M14 11.4142L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L12.5858 10H10.5C9.94772 10 9.5 9.55228 9.5 9C9.5 8.44772 9.94772 8 10.5 8H15C15.1356 8 15.2649 8.02699 15.3828 8.07588C15.4999 8.12432 15.6096 8.19595 15.705 8.29078C15.7064 8.29219 15.7078 8.2936 15.7092 8.29502C15.9023 8.48924 15.9992 8.74301 16 8.997C16 8.998 16 8.999 16 9V13.5C16 14.0523 15.5523 14.5 15 14.5C14.4477 14.5 14 14.0523 14 13.5V11.4142Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 21.25C3.5335 21.25 2.75 20.4665 2.75 19.5V4.5C2.75 3.5335 3.5335 2.75 4.5 2.75H19.5C20.4665 2.75 21.25 3.5335 21.25 4.5V19.5C21.25 20.4665 20.4665 21.25 19.5 21.25H4.5ZM4.75 19.25H19.25V4.75H4.75V19.25Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const ArrowSquareUpRightIcon = assignWithoutSideEffects(_ArrowSquareUpRightIcon, {
  componentId: 'ArrowSquareUpRightIcon',
});

export default ArrowSquareUpRightIcon;
