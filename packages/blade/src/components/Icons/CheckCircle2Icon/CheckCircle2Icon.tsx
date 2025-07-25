import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _CheckCircle2Icon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.9571 10.4571C17.3476 10.0666 17.3476 9.43342 16.9571 9.04289C16.5666 8.65237 15.9334 8.65237 15.5429 9.04289L11 13.5858L9.45711 12.0429C9.06658 11.6524 8.43342 11.6524 8.04289 12.0429C7.65237 12.4334 7.65237 13.0666 8.04289 13.4571L10.2929 15.7071C10.6834 16.0976 11.3166 16.0976 11.7071 15.7071L16.9571 10.4571Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2ZM4.5 12C4.5 7.58172 8.08172 4 12.5 4C16.9183 4 20.5 7.58172 20.5 12C20.5 16.4183 16.9183 20 12.5 20C8.08172 20 4.5 16.4183 4.5 12Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const CheckCircle2Icon = assignWithoutSideEffects(_CheckCircle2Icon, {
  componentId: 'CheckCircle2Icon',
});

export default CheckCircle2Icon;
