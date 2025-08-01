import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _FilmIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.18 1C2.42373 1 1 2.42374 1 4.18V19.82C1 21.5763 2.42374 23 4.18 23H19.82C21.5763 23 23 21.5763 23 19.82V4.18C23 2.42373 21.5763 1 19.82 1H4.18ZM21 6V4.18C21 3.5283 20.4717 3 19.82 3H18V6H21ZM18 8H21V11H18V8ZM16 3H8V11H16V3ZM21 13V16H18V13H21ZM21 18H18V21H19.82C20.4717 21 21 20.4717 21 19.82V18ZM16 13V21H8V13H16ZM3 18V19.82C3 20.4717 3.5283 21 4.18 21H6V18H3ZM6 16H3V13H6V16ZM3 11V8H6V11H3ZM3 6H6V3H4.18C3.5283 3 3 3.5283 3 4.18V6Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const FilmIcon = assignWithoutSideEffects(_FilmIcon, {
  componentId: 'FilmIcon',
});

export default FilmIcon;
