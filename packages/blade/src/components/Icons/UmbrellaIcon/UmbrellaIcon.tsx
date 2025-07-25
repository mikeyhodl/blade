import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _UmbrellaIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.00455935 11.905C0.594791 5.7216 5.78855 1 12 1C18.2115 1 23.4053 5.7216 23.9955 11.905C24.0223 12.1854 23.9295 12.4642 23.74 12.6727C23.5505 12.8811 23.2818 13 23 13H13V19C13 20.1046 13.8955 21 15 21C16.1046 21 17 20.1046 17 19C17 18.4477 17.4477 18 18 18C18.5523 18 19 18.4477 19 19C19 21.2091 17.2092 23 15 23C12.7909 23 11 21.2091 11 19V13H1.00003C0.718289 13 0.449617 12.8811 0.260094 12.6727C0.0705722 12.4642 -0.0222128 12.1854 0.00455935 11.905ZM21.8394 11C20.8835 6.39076 16.8072 3 12 3C7.19287 3 3.11657 6.39076 2.16066 11H21.8394Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const UmbrellaIcon = assignWithoutSideEffects(_UmbrellaIcon, {
  componentId: 'UmbrellaIcon',
});

export default UmbrellaIcon;
