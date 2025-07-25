import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _LifeBuoyIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM4.96813 6.38228C3.73648 7.92196 3 9.87497 3 12C3 14.125 3.73649 16.078 4.96813 17.6177L7.82842 14.7574C7.30489 13.967 7 13.0191 7 12C7 10.9809 7.30489 10.033 7.82842 9.24257L4.96813 6.38228ZM9.24265 16.1716L6.38235 19.0319C7.92202 20.2635 9.875 21 12 21C14.125 21 16.078 20.2635 17.6177 19.0319L14.7574 16.1716C13.9669 16.6951 13.0191 17 12 17C10.9809 17 10.0331 16.6951 9.24265 16.1716ZM21 12C21 14.125 20.2635 16.078 19.0319 17.6177L16.1716 14.7574C16.6951 13.967 17 13.0191 17 12C17 10.9809 16.6951 10.033 16.1716 9.24258L19.0319 6.38228C20.2635 7.92196 21 9.87497 21 12ZM17.6177 4.96808L14.7574 7.82838C13.9669 7.30487 13.0191 7 12 7C10.9809 7 10.0331 7.30487 9.24265 7.82837L6.38235 4.96807C7.92201 3.73646 9.875 3 12 3C14.125 3 16.078 3.73646 17.6177 4.96808ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const LifeBuoyIcon = assignWithoutSideEffects(_LifeBuoyIcon, {
  componentId: 'LifeBuoyIcon',
});

export default LifeBuoyIcon;
