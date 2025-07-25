import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _LogOutIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M5 3C4.44772 3 4 3.44772 4 4V20C4 20.5523 4.44772 21 5 21H10C10.5523 21 11 21.4477 11 22C11 22.5523 10.5523 23 10 23H5C3.34315 23 2 21.6569 2 20V4C2 2.34315 3.34315 1 5 1H10C10.5523 1 11 1.44772 11 2C11 2.55228 10.5523 3 10 3H5Z"
        fill={iconColor}
      />
      <Path
        d="M16.2929 7.29289C16.6834 6.90237 17.3166 6.90237 17.7071 7.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L17.7071 16.7071C17.3166 17.0976 16.6834 17.0976 16.2929 16.7071C15.9024 16.3166 15.9024 15.6834 16.2929 15.2929L18.5858 13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H18.5858L16.2929 8.70711C15.9024 8.31658 15.9024 7.68342 16.2929 7.29289Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const LogOutIcon = assignWithoutSideEffects(_LogOutIcon, {
  componentId: 'LogOutIcon',
});

export default LogOutIcon;
