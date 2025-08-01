import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _MagicKonnectIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0014 9.56575L10.4838 11.439L13.4463 9.55535L11.5089 16.6624L13.4763 16.664L16.3383 6.16663L11.0014 9.56575Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.81432 13.6766L6.99993 16.6644H11.0326L12.6825 10.586L7.81432 13.6766Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.05906 21.9832C3.01983 21.9944 2.9778 22 2.93858 22C2.8181 22 2.69761 21.9468 2.61636 21.8487C2.50989 21.7198 2.49027 21.5377 2.56592 21.3892L4.2947 18.0185C2.81249 16.2645 1.99994 14.0454 1.99994 11.7422C1.99994 6.37097 6.37091 2 11.7422 2C17.1134 2 21.4844 6.36817 21.4844 11.7394C21.4844 17.1107 17.1134 21.4816 11.7422 21.4816C10.33 21.4816 8.97108 21.1874 7.69621 20.6046L3.05906 21.9832ZM6.83214 17.7283L6.27789 18.809L7.85477 18.3402L8.57986 18.6717C9.57477 19.1265 10.6321 19.3563 11.7422 19.3563C15.9396 19.3563 19.359 15.9369 19.359 11.7394C19.359 7.54278 15.9404 4.12538 11.7422 4.12538C7.54473 4.12538 4.12532 7.54479 4.12532 11.7422C4.12532 13.5436 4.76033 15.2766 5.91807 16.6467L6.83214 17.7283Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const MagicKonnectIcon = assignWithoutSideEffects(_MagicKonnectIcon, {
  componentId: 'MagicKonnectIcon',
});

export default MagicKonnectIcon;
