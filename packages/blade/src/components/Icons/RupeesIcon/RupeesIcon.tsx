import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _RupeesIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17 7.78125L16.5015 9.59375H7L7.49853 7.78125H17ZM12.5425 20L7.17595 13L7.14663 11.6875H9.81525C10.5093 11.6875 11.1007 11.5833 11.5894 11.375C12.0782 11.1615 12.4521 10.8437 12.7111 10.4219C12.9702 9.99479 13.0997 9.45833 13.0997 8.8125C13.0997 7.85937 12.8309 7.11198 12.2933 6.57031C11.7556 6.02344 10.9296 5.75 9.81525 5.75H7L7.49853 4H9.81525C11.0078 4 11.9853 4.21094 12.7478 4.63281C13.5152 5.04948 14.0821 5.6224 14.4487 6.35156C14.8201 7.07552 15.0059 7.89583 15.0059 8.8125C15.0059 9.64062 14.8348 10.4036 14.4927 11.1016C14.1554 11.7943 13.6129 12.3516 12.8651 12.7734C12.1222 13.1953 11.1398 13.4062 9.91789 13.4062H9.8739L14.8299 19.875V20H12.5425ZM17 4L16.5015 5.8125L9.02346 5.75L9.52199 4H17Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const RupeesIcon = assignWithoutSideEffects(_RupeesIcon, {
  componentId: 'RupeesIcon',
});

export default RupeesIcon;
