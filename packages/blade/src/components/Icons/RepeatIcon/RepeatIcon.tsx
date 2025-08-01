import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _RepeatIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17.7071 0.292893C17.3166 -0.0976311 16.6834 -0.0976311 16.2929 0.292893C15.9024 0.683417 15.9024 1.31658 16.2929 1.70711L18.5858 4H7C4.23858 4 2 6.23858 2 9V11C2 11.5523 2.44772 12 3 12C3.55228 12 4 11.5523 4 11V9C4 7.34315 5.34315 6 7 6H18.5858L16.2929 8.29289C15.9024 8.68342 15.9024 9.31658 16.2929 9.70711C16.6834 10.0976 17.3166 10.0976 17.7071 9.70711L21.7071 5.70711C22.0976 5.31658 22.0976 4.68342 21.7071 4.29289L17.7071 0.292893Z"
        fill={iconColor}
      />
      <Path
        d="M7.70711 14.2929C8.09763 14.6834 8.09763 15.3166 7.70711 15.7071L5.41421 18H17C18.6569 18 20 16.6569 20 15V13C20 12.4477 20.4477 12 21 12C21.5523 12 22 12.4477 22 13V15C22 17.7614 19.7614 20 17 20H5.41421L7.70711 22.2929C8.09763 22.6834 8.09763 23.3166 7.70711 23.7071C7.31658 24.0976 6.68342 24.0976 6.29289 23.7071L2.29289 19.7071C1.90237 19.3166 1.90237 18.6834 2.29289 18.2929L6.29289 14.2929C6.68342 13.9024 7.31658 13.9024 7.70711 14.2929Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const RepeatIcon = assignWithoutSideEffects(_RepeatIcon, {
  componentId: 'RepeatIcon',
});

export default RepeatIcon;
