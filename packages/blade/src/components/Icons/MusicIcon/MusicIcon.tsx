import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _MusicIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6464 2.23699C21.8707 2.42699 22 2.70606 22 3.00001V16C22 18.2091 20.2091 20 18 20C15.7909 20 14 18.2091 14 16C14 13.7909 15.7909 12 18 12C18.7286 12 19.4117 12.1948 20 12.5351V4.18047L10 5.84713V18L9.99999 18.0032C9.99824 20.2109 8.20806 22 6 22C3.79086 22 2 20.2091 2 18C2 15.7909 3.79086 14 6 14C6.72857 14 7.41165 14.1948 8 14.5351V5.00001C8 4.51117 8.35341 4.09398 8.8356 4.01361L20.8356 2.01361C21.1256 1.96529 21.4221 2.04698 21.6464 2.23699ZM6 16C7.10457 16 8 16.8954 8 18C8 19.1046 7.10457 20 6 20C4.89543 20 4 19.1046 4 18C4 16.8954 4.89543 16 6 16ZM16 16C16 14.8954 16.8954 14 18 14C19.1046 14 20 14.8954 20 16C20 17.1046 19.1046 18 18 18C16.8954 18 16 17.1046 16 16Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const MusicIcon = assignWithoutSideEffects(_MusicIcon, {
  componentId: 'MusicIcon',
});

export default MusicIcon;
