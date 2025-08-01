import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _MailIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 6.01769V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6C1 4.34772 2.34772 3 4 3H20C21.6443 3 22.987 4.33473 22.9999 5.97608C23.0002 5.98996 23.0003 6.00383 23 6.01769ZM3.10659 5.55392C3.27198 5.22691 3.61205 5 4 5H20C20.388 5 20.7281 5.22695 20.8935 5.55401L12.0001 11.7794L3.10659 5.55392ZM3 7.92062V18C3 18.5477 3.45228 19 4 19H20C20.5477 19 21 18.5477 21 18V7.92074L12.5735 13.8193C12.2292 14.0603 11.7709 14.0603 11.4266 13.8193L3 7.92062Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const MailIcon = assignWithoutSideEffects(_MailIcon, {
  componentId: 'MailIcon',
});

export default MailIcon;
