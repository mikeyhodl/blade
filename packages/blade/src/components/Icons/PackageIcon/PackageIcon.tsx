import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _PackageIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.49335 2.63787L2.55877 4.60273C1.97162 4.88844 0.999978 5.76057 0.999988 7.24016V16.757C0.993506 17.896 1.63264 18.9406 2.65001 19.4532L2.65277 19.4546L10.6525 23.4544C11.4975 23.8773 12.4924 23.8773 13.3375 23.4544L21.335 19.4557L21.336 19.4552C22.3549 18.9484 22.9994 17.9082 23 16.7701V7.23962C22.9994 6.10172 22.3551 5.06215 21.3364 4.5553L21.335 4.55462L13.3372 0.55572L13.335 0.554619C12.494 0.136742 11.5059 0.136742 10.665 0.554619L6.61373 2.57775C6.57239 2.59504 6.53216 2.61512 6.49335 2.63787ZM9.23962 3.50194L11.555 2.34568C11.8348 2.20691 12.1642 2.20651 12.4441 2.34523L12.445 2.34568L19.7589 6.00266L17 7.38213L9.23962 3.50194ZM7.00218 4.61928L14.7639 8.50016L12 9.88213L4.23654 6.0004L7.00218 4.61928ZM2.99999 7.61819V16.7671C2.99734 17.147 3.21012 17.4955 3.54914 17.6667L11 21.3921V11.6182L2.99999 7.61819ZM13 21.3871L20.4428 17.6657L20.445 17.6646C20.7848 17.4958 20.9998 17.1491 21 16.7696V7.6182L13 11.6182V21.3871Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const PackageIcon = assignWithoutSideEffects(_PackageIcon, {
  componentId: 'PackageIcon',
});

export default PackageIcon;
