import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _FileZipIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6.6958 5.9741V7.99188H8.69824V9.98041H10.7062V7.95787H8.7038V5.9741H6.6958Z"
        fill={iconColor}
      />
      <Path
        d="M6.6958 10.0097V12.0274H8.69824V14.0255H10.7062V12.0029H8.7038V10.0097H6.6958Z"
        fill={iconColor}
      />
      <Path
        d="M6.6958 14.0452V16.063H8.69824V18.0706H10.7062V16.048H8.7038V14.0452H6.6958Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.012 23H17.988C19.6515 23 21 21.6527 21 19.9907V7.99932C21 7.73222 20.8934 7.47615 20.7038 7.28786L14.6655 1.29164C14.4774 1.10485 14.2229 1 13.9577 1H6.012C4.34852 1 3 2.34732 3 4.00932V19.9907C3 21.6527 4.34852 23 6.012 23ZM8.69824 20.9938H6.012C5.45751 20.9938 5.008 20.5447 5.008 19.9907V4.00932C5.008 3.45532 5.45751 3.00621 6.012 3.00621H6.6958V3.95632L8.69824 3.95632V5.93533H10.7062V3.91279H8.7038V3.00621H13.1416V8.38608C13.1416 8.94008 13.5911 9.38918 14.1456 9.38918H18.992V19.9907C18.992 20.5447 18.5425 20.9938 17.988 20.9938H10.7062V20.0931H8.7038V18.0808H6.6958V20.0985H8.69824V20.9938ZM17.9511 7.38297L15.1496 4.60099V7.38297H17.9511Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const FileZipIcon = assignWithoutSideEffects(_FileZipIcon, {
  componentId: 'FileZipIcon',
});

export default FileZipIcon;
