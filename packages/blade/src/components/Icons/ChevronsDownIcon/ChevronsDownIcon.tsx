import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _ChevronsDownIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.70711 5.29289C7.31658 4.90237 6.68342 4.90237 6.29289 5.29289C5.90237 5.68342 5.90237 6.31658 6.29289 6.70711L11.2929 11.7071C11.6834 12.0976 12.3166 12.0976 12.7071 11.7071L17.7071 6.70711C18.0976 6.31658 18.0976 5.68342 17.7071 5.29289C17.3166 4.90237 16.6834 4.90237 16.2929 5.29289L12 9.58579L7.70711 5.29289Z"
        fill={iconColor}
      />
      <Path
        d="M7.70711 12.2929C7.31658 11.9024 6.68342 11.9024 6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071L11.2929 18.7071C11.6834 19.0976 12.3166 19.0976 12.7071 18.7071L17.7071 13.7071C18.0976 13.3166 18.0976 12.6834 17.7071 12.2929C17.3166 11.9024 16.6834 11.9024 16.2929 12.2929L12 16.5858L7.70711 12.2929Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const ChevronsDownIcon = assignWithoutSideEffects(_ChevronsDownIcon, {
  componentId: 'ChevronsDownIcon',
});

export default ChevronsDownIcon;
