import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _SunIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C12.5523 0 13 0.447715 13 1V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V1C11 0.447715 11.4477 0 12 0Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20C12.5523 20 13 20.4477 13 21V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V21C11 20.4477 11.4477 20 12 20Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.51289 3.51289C3.90342 3.12237 4.53658 3.12237 4.92711 3.51289L6.34711 4.93289C6.73763 5.32342 6.73763 5.95658 6.34711 6.34711C5.95658 6.73763 5.32342 6.73763 4.93289 6.34711L3.51289 4.92711C3.12237 4.53658 3.12237 3.90342 3.51289 3.51289Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6529 17.6529C18.0434 17.2624 18.6766 17.2624 19.0671 17.6529L20.4871 19.0729C20.8776 19.4634 20.8776 20.0966 20.4871 20.4871C20.0966 20.8776 19.4634 20.8776 19.0729 20.4871L17.6529 19.0671C17.2624 18.6766 17.2624 18.0434 17.6529 17.6529Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12C0 11.4477 0.447715 11 1 11H3C3.55228 11 4 11.4477 4 12C4 12.5523 3.55228 13 3 13H1C0.447715 13 0 12.5523 0 12Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 12C20 11.4477 20.4477 11 21 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H21C20.4477 13 20 12.5523 20 12Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.34711 17.6529C6.73763 18.0434 6.73763 18.6766 6.34711 19.0671L4.92711 20.4871C4.53658 20.8776 3.90342 20.8776 3.51289 20.4871C3.12237 20.0966 3.12237 19.4634 3.51289 19.0729L4.93289 17.6529C5.32342 17.2624 5.95658 17.2624 6.34711 17.6529Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.4871 3.51289C20.8776 3.90342 20.8776 4.53658 20.4871 4.92711L19.0671 6.34711C18.6766 6.73763 18.0434 6.73763 17.6529 6.34711C17.2624 5.95658 17.2624 5.32342 17.6529 4.93289L19.0729 3.51289C19.4634 3.12237 20.0966 3.12237 20.4871 3.51289Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const SunIcon = assignWithoutSideEffects(_SunIcon, {
  componentId: 'SunIcon',
});

export default SunIcon;
