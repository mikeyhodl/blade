import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _PercentIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5ZM6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5Z"
        fill={iconColor}
      />
      <Path
        d="M19.7071 5.70711L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 14C15.567 14 14 15.567 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14ZM16 17.5C16 16.6716 16.6716 16 17.5 16C18.3284 16 19 16.6716 19 17.5C19 18.3284 18.3284 19 17.5 19C16.6716 19 16 18.3284 16 17.5Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const PercentIcon = assignWithoutSideEffects(_PercentIcon, {
  componentId: 'PercentIcon',
});

export default PercentIcon;
