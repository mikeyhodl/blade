import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _UsersIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2C6.23858 2 4 4.23858 4 7C4 9.76142 6.23858 12 9 12C11.7614 12 14 9.76142 14 7C14 4.23858 11.7614 2 9 2ZM6 7C6 5.34315 7.34315 4 9 4C10.6569 4 12 5.34315 12 7C12 8.65685 10.6569 10 9 10C7.34315 10 6 8.65685 6 7Z"
        fill={iconColor}
      />
      <Path
        d="M5 14C2.23858 14 0 16.2386 0 19V21C0 21.5523 0.447715 22 1 22C1.55228 22 2 21.5523 2 21V19C2 17.3431 3.34315 16 5 16H13C14.6569 16 16 17.3431 16 19V21C16 21.5523 16.4477 22 17 22C17.5523 22 18 21.5523 18 21V19C18 16.2386 15.7614 14 13 14H5Z"
        fill={iconColor}
      />
      <Path
        d="M19.0318 14.88C19.1698 14.3453 19.7153 14.0237 20.25 14.1618C22.4562 14.7314 23.9983 16.7207 24 18.9993V21C24 21.5523 23.5523 22 23 22C22.4477 22 22 21.5523 22 21V19.0007C21.9988 17.6337 21.0737 16.44 19.75 16.0982C19.2153 15.9602 18.8937 15.4148 19.0318 14.88Z"
        fill={iconColor}
      />
      <Path
        d="M16.248 2.16125C15.713 2.02426 15.1682 2.34694 15.0312 2.88196C14.8943 3.41699 15.2169 3.96176 15.752 4.09875C17.0794 4.43863 18.0078 5.63474 18.0078 7.005C18.0078 8.37526 17.0794 9.57137 15.752 9.91125C15.2169 10.0482 14.8943 10.593 15.0312 11.128C15.1682 11.6631 15.713 11.9857 16.248 11.8488C18.4604 11.2823 20.0078 9.28876 20.0078 7.005C20.0078 4.72124 18.4604 2.72771 16.248 2.16125Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const UsersIcon = assignWithoutSideEffects(_UsersIcon, {
  componentId: 'UsersIcon',
});

export default UsersIcon;
