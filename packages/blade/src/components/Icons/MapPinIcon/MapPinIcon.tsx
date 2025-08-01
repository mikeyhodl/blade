import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _MapPinIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.4448 23.8317C11.4448 23.8317 11.4453 23.8321 12 23L12.5547 23.8321C12.2188 24.056 11.7807 24.0556 11.4448 23.8317Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4448 23.8317L12 23C12.5547 23.8321 12.556 23.8312 12.556 23.8312L12.5581 23.8298L12.5648 23.8253L12.5877 23.8098C12.6072 23.7966 12.6349 23.7776 12.6704 23.753C12.7415 23.7038 12.8435 23.6321 12.9722 23.5392C13.2295 23.3534 13.5936 23.0822 14.0292 22.7354C14.8987 22.043 16.0606 21.0428 17.226 19.8127C19.5157 17.3958 22 13.9019 22 10C22 4.47715 17.5228 0 12 0C6.47715 0 2 4.47715 2 10C2 13.9019 4.48426 17.3958 6.77405 19.8127C7.93939 21.0428 9.10133 22.043 9.97082 22.7354C10.4064 23.0822 10.7705 23.3534 11.0278 23.5392C11.1565 23.6321 11.2585 23.7038 11.3296 23.753C11.3651 23.7776 11.3928 23.7966 11.4123 23.8098L11.4352 23.8253L11.4419 23.8298L11.4448 23.8317ZM4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 13.0981 17.9843 16.1042 15.774 18.4373C14.6894 19.5822 13.6013 20.5195 12.7833 21.1708C12.4789 21.4133 12.213 21.6152 12 21.7726C11.787 21.6152 11.5211 21.4133 11.2167 21.1708C10.3987 20.5195 9.31061 19.5822 8.22595 18.4373C6.01574 16.1042 4 13.0981 4 10Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const MapPinIcon = assignWithoutSideEffects(_MapPinIcon, {
  componentId: 'MapPinIcon',
});

export default MapPinIcon;
