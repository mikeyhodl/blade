import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _CreditCardIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.875 14.375C15.3227 14.375 14.875 14.8227 14.875 15.375C14.875 15.9273 15.3227 16.375 15.875 16.375H18.875C19.4273 16.375 19.875 15.9273 19.875 15.375C19.875 14.8227 19.4273 14.375 18.875 14.375H15.875Z"
        fill={iconColor}
      />
      <Path
        d="M10.375 15.375C10.375 14.8227 10.8227 14.375 11.375 14.375H12.5C13.0523 14.375 13.5 14.8227 13.5 15.375C13.5 15.9273 13.0523 16.375 12.5 16.375H11.375C10.8227 16.375 10.375 15.9273 10.375 15.375Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.75 6C1.75 5.0335 2.5335 4.25 3.5 4.25H21.5C22.4665 4.25 23.25 5.0335 23.25 6V18C23.25 18.9665 22.4665 19.75 21.5 19.75H3.5C2.5335 19.75 1.75 18.9665 1.75 18V6ZM3.75 8.375V6.25H21.25V8.375H3.75ZM21.25 10.375V17.75H3.75V10.375H21.25Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const CreditCardIcon = assignWithoutSideEffects(_CreditCardIcon, {
  componentId: 'CreditCardIcon',
});

export default CreditCardIcon;
