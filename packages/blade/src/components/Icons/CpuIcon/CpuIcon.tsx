import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _CpuIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 8C8.44771 8 8 8.44771 8 9V15C8 15.5523 8.44771 16 9 16H15C15.5523 16 16 15.5523 16 15V9C16 8.44771 15.5523 8 15 8H9ZM10 14V10H14V14H10Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0C9.55229 0 10 0.447715 10 1V3H14V1C14 0.447715 14.4477 0 15 0C15.5523 0 16 0.447715 16 1V3H18C19.6569 3 21 4.34315 21 6V8H23C23.5523 8 24 8.44771 24 9C24 9.55229 23.5523 10 23 10H21V13H23C23.5523 13 24 13.4477 24 14C24 14.5523 23.5523 15 23 15H21V18C21 19.6569 19.6569 21 18 21H16V23C16 23.5523 15.5523 24 15 24C14.4477 24 14 23.5523 14 23V21H10V23C10 23.5523 9.55229 24 9 24C8.44771 24 8 23.5523 8 23V21H6C4.34315 21 3 19.6569 3 18V15H1C0.447715 15 0 14.5523 0 14C0 13.4477 0.447715 13 1 13H3V10H1C0.447715 10 0 9.55229 0 9C0 8.44771 0.447715 8 1 8H3V6C3 4.34315 4.34315 3 6 3H8V1C8 0.447715 8.44771 0 9 0ZM5 18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6C5.44772 5 5 5.44772 5 6V18Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const CpuIcon = assignWithoutSideEffects(_CpuIcon, {
  componentId: 'CpuIcon',
});

export default CpuIcon;
