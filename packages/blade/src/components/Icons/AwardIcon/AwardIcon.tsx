import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _AwardIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C7.58172 0 4 3.58172 4 8C4 10.5901 5.23084 12.8926 7.13952 14.3547L6.00873 22.8683C5.95817 23.249 6.13004 23.625 6.45099 23.8358C6.77193 24.0466 7.18525 24.0551 7.51452 23.8575L12 21.1662L16.4855 23.8575C16.8148 24.055 17.2281 24.0466 17.549 23.8358C17.8699 23.625 18.0418 23.2491 17.9913 22.8685L16.8617 14.3538C18.7697 12.8917 20 10.5895 20 8C20 3.58172 16.4183 0 12 0ZM15.3305 12.9915C15.2735 13.021 15.2199 13.0558 15.1702 13.095C14.2504 13.6686 13.1639 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 10.0815 16.9401 11.9154 15.3305 12.9915ZM14.9861 15.4241L15.7359 21.0753L12.5145 19.1425C12.1978 18.9525 11.8022 18.9525 11.4855 19.1425L8.26447 21.0751L9.01499 15.4245C9.93735 15.7957 10.9448 16 12 16C13.0556 16 14.0635 15.7955 14.9861 15.4241Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const AwardIcon = assignWithoutSideEffects(_AwardIcon, {
  componentId: 'AwardIcon',
});

export default AwardIcon;
