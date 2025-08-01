import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _AlertTriangleIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 8.10275C12.5523 8.10275 13 8.55047 13 9.10275V13.1028C13 13.655 12.5523 14.1028 12 14.1028C11.4477 14.1028 11 13.655 11 13.1028V9.10275C11 8.55047 11.4477 8.10275 12 8.10275Z"
        fill={iconColor}
      />
      <Path
        d="M12 18.1028C12.5523 18.1028 13 17.655 13 17.1028C13 16.5505 12.5523 16.1028 12 16.1028C11.4477 16.1028 11 16.5505 11 17.1028C11 17.655 11.4477 18.1028 12 18.1028Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.43502 3.44412C9.97887 2.54754 10.9514 2 12 2C13.0486 2 14.0212 2.54754 14.565 3.44412L14.5679 3.44886L23.0379 17.5889L23.046 17.6027C23.5791 18.5258 23.5822 19.6624 23.0544 20.5885C22.5265 21.5145 21.5469 22.091 20.481 22.1027L20.47 22.1028L3.51903 22.1027C2.45315 22.091 1.47353 21.5145 0.94567 20.5885C0.41781 19.6624 0.420993 18.5258 0.95403 17.6027L0.962153 17.5889L9.43502 3.44412ZM11.1462 4.47938L2.6827 18.6086C2.50833 18.9152 2.50837 19.2913 2.68322 19.5981C2.85842 19.9054 3.1829 20.0972 3.53642 20.1027H20.4636C20.8171 20.0972 21.1416 19.9054 21.3168 19.5981C21.4917 19.2913 21.4917 18.9153 21.3174 18.6086L12.855 4.48137L12.8538 4.47938C12.6723 4.1817 12.3488 4 12 4C11.6513 4 11.3277 4.1817 11.1462 4.47938Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const AlertTriangleIcon = assignWithoutSideEffects(_AlertTriangleIcon, {
  componentId: 'AlertTriangleIcon',
});

export default AlertTriangleIcon;
