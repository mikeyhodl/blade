import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _DeleteIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L16.4142 12L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L15 13.4142L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071C10.9024 15.3166 10.9024 14.6834 11.2929 14.2929L13.5858 12L11.2929 9.70711C10.9024 9.31658 10.9024 8.68342 11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L15 10.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.24742 3.3415C7.43731 3.12448 7.71164 3 8 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H8C7.71164 21 7.43731 20.8755 7.24742 20.6585L0.247423 12.6585C-0.0824744 12.2815 -0.0824744 11.7185 0.247423 11.3415L7.24742 3.3415ZM8.45377 5L2.32877 12L8.45377 19H21C21.5523 19 22 18.5523 22 18V6C22 5.44772 21.5523 5 21 5H8.45377Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const DeleteIcon = assignWithoutSideEffects(_DeleteIcon, {
  componentId: 'DeleteIcon',
});

export default DeleteIcon;
