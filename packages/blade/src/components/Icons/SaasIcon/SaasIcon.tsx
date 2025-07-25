import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _SaasIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.63946 8.1551C6.25929 5.21021 8.87108 3 12 3C15.4516 3 18.2748 5.69029 18.4872 9.08835C21.0536 9.55345 23 11.7994 23 14.5C23 17.5376 20.5376 20 17.5 20H7C3.68629 20 1 17.3137 1 14C1 11.154 2.9808 8.77172 5.63946 8.1551ZM7.74013 8.04528C8.80473 8.17645 9.78431 8.58679 10.6012 9.2005C11.0427 9.53224 11.1317 10.1591 10.8 10.6007C10.4683 11.0422 9.84138 11.1312 9.39983 10.7995C8.73131 10.2972 7.9018 10 7 10C6.8699 10 6.74154 10.0062 6.61515 10.0182C4.58706 10.2112 3 11.9208 3 14C3 16.2091 4.79087 18 7 18H17.5C19.433 18 21 16.433 21 14.5C21 12.8434 19.8491 11.4556 18.3032 11.0926C18.0642 12.041 17.617 12.9064 17.0138 13.6368C16.6622 14.0626 16.0319 14.1227 15.606 13.771C15.1802 13.4194 15.1201 12.7891 15.4718 12.3632C16.0333 11.6833 16.398 10.8376 16.4816 9.91062C16.4938 9.77543 16.5 9.63848 16.5 9.5C16.5 7.01471 14.4853 5 12 5C10.024 5 8.34478 6.27416 7.74013 8.04528Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const SaasIcon = assignWithoutSideEffects(_SaasIcon, {
  componentId: 'SaasIcon',
});

export default SaasIcon;
