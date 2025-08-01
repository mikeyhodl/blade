import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _UserPlusIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 2C5.73858 2 3.5 4.23858 3.5 7C3.5 9.76142 5.73858 12 8.5 12C11.2614 12 13.5 9.76142 13.5 7C13.5 4.23858 11.2614 2 8.5 2ZM5.5 7C5.5 5.34315 6.84315 4 8.5 4C10.1569 4 11.5 5.34315 11.5 7C11.5 8.65685 10.1569 10 8.5 10C6.84315 10 5.5 8.65685 5.5 7Z"
        fill={iconColor}
      />
      <Path
        d="M5 14C2.23858 14 0 16.2386 0 19V21C0 21.5523 0.447715 22 1 22C1.55228 22 2 21.5523 2 21V19C2 17.3431 3.34315 16 5 16H12C13.6569 16 15 17.3431 15 19V21C15 21.5523 15.4477 22 16 22C16.5523 22 17 21.5523 17 21V19C17 16.2386 14.7614 14 12 14H5Z"
        fill={iconColor}
      />
      <Path
        d="M20 7C20.5523 7 21 7.44772 21 8V10H23C23.5523 10 24 10.4477 24 11C24 11.5523 23.5523 12 23 12H21V14C21 14.5523 20.5523 15 20 15C19.4477 15 19 14.5523 19 14V12H17C16.4477 12 16 11.5523 16 11C16 10.4477 16.4477 10 17 10H19V8C19 7.44772 19.4477 7 20 7Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const UserPlusIcon = assignWithoutSideEffects(_UserPlusIcon, {
  componentId: 'UserPlusIcon',
});

export default UserPlusIcon;
