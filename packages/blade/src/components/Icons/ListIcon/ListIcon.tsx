import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _ListIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 5C4.55228 5 5 5.44772 5 6C5 6.55228 4.55228 7 4 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H4Z"
        fill={iconColor}
      />
      <Path
        d="M8 5C7.44772 5 7 5.44772 7 6C7 6.55228 7.44772 7 8 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H8Z"
        fill={iconColor}
      />
      <Path
        d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H8Z"
        fill={iconColor}
      />
      <Path
        d="M7 18C7 17.4477 7.44772 17 8 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H8C7.44772 19 7 18.5523 7 18Z"
        fill={iconColor}
      />
      <Path
        d="M5 12C5 11.4477 4.55228 11 4 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H4C4.55228 13 5 12.5523 5 12Z"
        fill={iconColor}
      />
      <Path
        d="M4 17C4.55228 17 5 17.4477 5 18C5 18.5523 4.55228 19 4 19H3C2.44772 19 2 18.5523 2 18C2 17.4477 2.44772 17 3 17H4Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const ListIcon = assignWithoutSideEffects(_ListIcon, {
  componentId: 'ListIcon',
});

export default ListIcon;
