import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _FeatherIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0429 4.04293C13.7779 1.30796 18.2121 1.30796 20.9471 4.04293C23.6818 6.77765 23.6821 11.2113 20.9479 13.9464L20.9471 13.9471L14.2082 20.7061C14.0205 20.8943 13.7657 21 13.5 21H5.41424L2.70711 23.7072C2.31658 24.0977 1.68342 24.0977 1.29289 23.7072C0.902369 23.3166 0.902369 22.6835 1.29289 22.293L4 19.5858V11.5C4 11.2348 4.10536 10.9805 4.29289 10.7929L11.0429 4.04293ZM13.0849 19H7.41424L9.41421 17.0001H15.079L13.0849 19ZM17.0706 15.0025L19.5318 12.534L19.5329 12.5329C21.4868 10.579 21.4868 7.41107 19.5329 5.45714C17.579 3.50322 14.411 3.50322 12.4571 5.45714L6 11.9142V17.5858L15.2929 8.29295C15.6834 7.90243 16.3166 7.90243 16.7071 8.29295C17.0976 8.68348 17.0976 9.31664 16.7071 9.70717L11.4142 15.0001H17C17.0237 15.0001 17.0473 15.0009 17.0706 15.0025Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const FeatherIcon = assignWithoutSideEffects(_FeatherIcon, {
  componentId: 'FeatherIcon',
});

export default FeatherIcon;
