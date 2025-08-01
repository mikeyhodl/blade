import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _TokenHqIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.8 10C7.8 9.44771 8.24771 9 8.8 9H8.80898C9.36127 9 9.80898 9.44771 9.80898 10C9.80898 10.5523 9.36127 11 8.80898 11H8.8C8.24771 11 7.8 10.5523 7.8 10Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.29451 10C4.29451 9.44771 4.74222 9 5.29451 9H5.30349C5.85577 9 6.30349 9.44771 6.30349 10C6.30349 10.5523 5.85577 11 5.30349 11H5.29451C4.74222 11 4.29451 10.5523 4.29451 10Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6001 1.5C12.6001 0.947715 12.1524 0.5 11.6001 0.5C11.0478 0.5 10.6001 0.947715 10.6001 1.5V22.5C10.6001 23.0523 11.0478 23.5 11.6001 23.5C12.1524 23.5 12.6001 23.0523 12.6001 22.5V21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H12.6001V1.5ZM12.6001 5V9L22 9V6C22 5.44772 21.5523 5 21 5H12.6001ZM12.6001 11V19H21C21.5523 19 22 18.5523 22 18V11L12.6001 11ZM3 5C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H8.5C9.05229 19 9.5 19.4477 9.5 20C9.5 20.5523 9.05229 21 8.5 21H3C1.34315 21 0 19.6569 0 18V6C0 4.34315 1.34315 3 3 3H8.5C9.05229 3 9.5 3.44772 9.5 4C9.5 4.55228 9.05229 5 8.5 5H3Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const TokenHqIcon = assignWithoutSideEffects(_TokenHqIcon, {
  componentId: 'TokenHqIcon',
});

export default TokenHqIcon;
