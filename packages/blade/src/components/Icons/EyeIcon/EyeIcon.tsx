import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _EyeIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3C8.8711 3 6.22807 4.48937 4.23728 6.25113C2.24678 8.01264 0.822273 10.1194 0.105573 11.5528C-0.0351909 11.8343 -0.0351909 12.1657 0.105573 12.4472C0.822273 13.8806 2.24678 15.9874 4.23728 17.7489C6.22807 19.5106 8.8711 21 12 21C15.1289 21 17.7719 19.5106 19.7627 17.7489C21.7532 15.9874 23.1777 13.8806 23.8944 12.4472C24.0352 12.1657 24.0352 11.8343 23.8944 11.5528C23.1777 10.1194 21.7532 8.01264 19.7627 6.25113C17.7719 4.48937 15.1289 3 12 3ZM5.56272 16.2511C3.98954 14.8589 2.80913 13.2146 2.13142 12C2.80913 10.7854 3.98954 9.14106 5.56272 7.74887C7.3386 6.17729 9.5289 5 12 5C14.4711 5 16.6614 6.17729 18.4373 7.74887C20.0105 9.14106 21.1909 10.7854 21.8686 12C21.1909 13.2146 20.0105 14.8589 18.4373 16.2511C16.6614 17.8227 14.4711 19 12 19C9.5289 19 7.3386 17.8227 5.56272 16.2511Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const EyeIcon = assignWithoutSideEffects(_EyeIcon, {
  componentId: 'EyeIcon',
});

export default EyeIcon;
