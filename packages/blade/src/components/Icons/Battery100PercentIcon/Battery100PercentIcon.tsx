import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _Battery100PercentIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5C1.34315 5 0 6.34315 0 8V16C0 17.6569 1.34315 19 3 19H17C18.6569 19 20 17.6569 20 16V8C20 6.34315 18.6569 5 17 5H3ZM2 8C2 7.44772 2.44772 7 3 7H17C17.5523 7 18 7.44772 18 8V16C18 16.5523 17.5523 17 17 17H3C2.44772 17 2 16.5523 2 16V8Z"
        fill={iconColor}
      />
      <Path
        d="M24 11C24 10.4477 23.5523 10 23 10C22.4477 10 22 10.4477 22 11V13C22 13.5523 22.4477 14 23 14C23.5523 14 24 13.5523 24 13V11Z"
        fill={iconColor}
      />
      <Path
        d="M4 8C4.55228 8 5 8.44772 5 9V15C5 15.5523 4.55228 16 4 16C3.44772 16 3 15.5523 3 15V9C3 8.44772 3.44772 8 4 8Z"
        fill={iconColor}
      />
      <Path
        d="M7 8C7.55228 8 8 8.44772 8 9V15C8 15.5523 7.55228 16 7 16C6.44772 16 6 15.5523 6 15V9C6 8.44772 6.44772 8 7 8Z"
        fill={iconColor}
      />
      <Path
        d="M10 8C10.5523 8 11 8.44772 11 9V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V9C9 8.44772 9.44772 8 10 8Z"
        fill={iconColor}
      />
      <Path
        d="M13 8C13.5523 8 14 8.44772 14 9V15C14 15.5523 13.5523 16 13 16C12.4477 16 12 15.5523 12 15V9C12 8.44772 12.4477 8 13 8Z"
        fill={iconColor}
      />
      <Path
        d="M16 8C16.5523 8 17 8.44772 17 9V15C17 15.5523 16.5523 16 16 16C15.4477 16 15 15.5523 15 15V9C15 8.44772 15.4477 8 16 8Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const Battery100PercentIcon = assignWithoutSideEffects(_Battery100PercentIcon, {
  componentId: 'Battery100PercentIcon',
});

export default Battery100PercentIcon;
