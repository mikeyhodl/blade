import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _LogInIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M13 2C13 1.44772 13.4477 1 14 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H14C13.4477 23 13 22.5523 13 22C13 21.4477 13.4477 21 14 21H19C19.5523 21 20 20.5523 20 20V4C20 3.44772 19.5523 3 19 3H14C13.4477 3 13 2.55228 13 2Z"
        fill={iconColor}
      />
      <Path
        d="M10.2929 7.29289C10.6834 6.90237 11.3166 6.90237 11.7071 7.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929 16.7071C9.90237 16.3166 9.90237 15.6834 10.2929 15.2929L12.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H12.5858L10.2929 8.70711C9.90237 8.31658 9.90237 7.68342 10.2929 7.29289Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const LogInIcon = assignWithoutSideEffects(_LogInIcon, {
  componentId: 'LogInIcon',
});

export default LogInIcon;
