import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _TrademarkIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.25 9.125C6.69772 9.125 6.25 9.57272 6.25 10.125C6.25 10.6773 6.69772 11.125 7.25 11.125H7.75V13.875C7.75 14.4273 8.19772 14.875 8.75 14.875C9.30228 14.875 9.75 14.4273 9.75 13.875V11.125H11.125V13.875C11.125 14.4273 11.5727 14.875 12.125 14.875C12.6773 14.875 13.125 14.4273 13.125 13.875V12.2992L14.0992 13.1343C14.4737 13.4553 15.0263 13.4553 15.4008 13.1343L16.375 12.2992V13.875C16.375 14.4273 16.8227 14.875 17.375 14.875C17.9273 14.875 18.375 14.4273 18.375 13.875V10.125C18.375 9.73448 18.1477 9.37969 17.7929 9.2165C17.4381 9.05332 17.0207 9.1116 16.7242 9.36576L14.75 11.0579L12.7812 9.37043C12.6056 9.21756 12.3761 9.125 12.125 9.125H7.25Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2ZM4.5 12C4.5 7.58172 8.08172 4 12.5 4C16.9183 4 20.5 7.58172 20.5 12C20.5 16.4183 16.9183 20 12.5 20C8.08172 20 4.5 16.4183 4.5 12Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const TrademarkIcon = assignWithoutSideEffects(_TrademarkIcon, {
  componentId: 'TrademarkIcon',
});

export default TrademarkIcon;
