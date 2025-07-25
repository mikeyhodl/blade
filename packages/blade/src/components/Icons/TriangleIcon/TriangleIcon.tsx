import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _TriangleIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.43502 3.34158C9.97887 2.445 10.9514 1.89746 12 1.89746C13.0486 1.89746 14.0212 2.445 14.565 3.34158L14.5679 3.34633L23.0379 17.4863L23.046 17.5001C23.5791 18.4232 23.5822 19.5599 23.0544 20.4859C22.5265 21.412 21.5469 21.9884 20.481 22.0001L20.47 22.0003L3.51903 22.0002C2.45315 21.9885 1.47353 21.412 0.94567 20.4859C0.41781 19.5599 0.420993 18.4232 0.95403 17.5001L0.962153 17.4863L9.43502 3.34158ZM11.1462 4.37684L2.6827 18.506C2.50833 18.8127 2.50837 19.1888 2.68322 19.4955C2.85842 19.8029 3.1829 19.9947 3.53642 20.0002H20.4636C20.8171 19.9947 21.1416 19.8029 21.3168 19.4955C21.4917 19.1888 21.4917 18.8127 21.3174 18.5061L12.855 4.37883C12.8546 4.37817 12.8542 4.3775 12.8538 4.37684C12.6723 4.07916 12.3488 3.89746 12 3.89746C11.6513 3.89746 11.3277 4.07916 11.1462 4.37684Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const TriangleIcon = assignWithoutSideEffects(_TriangleIcon, {
  componentId: 'TriangleIcon',
});

export default TriangleIcon;
