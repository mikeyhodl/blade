import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _StampIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4064 16.3022L17.4102 7.13452C17.4788 6.50752 17.4411 5.87322 17.2987 5.25913C15.982 -0.419711 8.01726 -0.419712 6.70057 5.25913C6.55819 5.87322 6.52051 6.50752 6.58916 7.13452L7.59292 16.3022H2.1C1.49249 16.3022 1 16.802 1 17.4185C1 18.035 1.49249 18.5348 2.1 18.5348H4.3V20.7674C4.3 22.0004 5.28497 23 6.5 23H17.5C18.715 23 19.7 22.0004 19.7 20.7674V18.5348H21.9C22.5075 18.5348 23 18.035 23 17.4185C23 16.802 22.5075 16.3022 21.9 16.3022H16.4064ZM15.1572 5.77049C14.3726 2.38663 9.62667 2.38663 8.84209 5.77049C8.75725 6.1364 8.73479 6.51436 8.7757 6.88797L9.79293 16.1786C9.79747 16.2202 9.79971 16.2614 9.79975 16.3022H14.1996C14.1996 16.2614 14.2018 16.2202 14.2064 16.1786L15.2236 6.88797C15.2645 6.51436 15.2421 6.1364 15.1572 5.77049ZM17.5 18.5348H6.5V20.7674H17.5V18.5348Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const StampIcon = assignWithoutSideEffects(_StampIcon, {
  componentId: 'StampIcon',
});

export default StampIcon;
