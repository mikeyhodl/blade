import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _ZoomOutIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12H14C14.5523 12 15 11.5523 15 11C15 10.4477 14.5523 10 14 10H8Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.125 19.2635 15.078 18.0319 16.6177L21.7071 20.2929C22.0977 20.6834 22.0977 21.3166 21.7071 21.7071C21.3166 22.0977 20.6834 22.0977 20.2929 21.7071L16.6177 18.0319C15.078 19.2635 13.125 20 11 20C6.02944 20 2 15.9706 2 11ZM18 11C18 12.886 17.2541 14.5978 16.0412 15.8566C16.0071 15.8828 15.9742 15.9116 15.9429 15.9429C15.9116 15.9742 15.8828 16.0071 15.8566 16.0412C14.5978 17.2541 12.886 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const ZoomOutIcon = assignWithoutSideEffects(_ZoomOutIcon, {
  componentId: 'ZoomOutIcon',
});

export default ZoomOutIcon;
