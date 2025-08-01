import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _SignalIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.42501 22C3.97501 22 3.66251 21.7958 3.48751 21.3875C3.31251 20.9791 3.38334 20.6166 3.70001 20.3L20.3 3.69998C20.6167 3.38331 20.9792 3.31248 21.3875 3.48748C21.7958 3.66248 22 3.97498 22 4.42498V20.5C22 20.9166 21.8542 21.2708 21.5625 21.5625C21.2708 21.8541 20.9167 22 20.5 22H4.42501ZM6.82501 20H20V6.84998L6.82501 20Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const SignalIcon = assignWithoutSideEffects(_SignalIcon, {
  componentId: 'SignalIcon',
});

export default SignalIcon;
