import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _DownloadIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V13.5858L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L11.2922 16.7064C11.2946 16.7088 11.297 16.7112 11.2995 16.7136C11.3938 16.8063 11.502 16.8764 11.6172 16.9241C11.7343 16.9727 11.8625 16.9996 11.997 17L12 17L12.003 17C12.2746 16.9992 12.5208 16.8901 12.7005 16.7136C12.703 16.7112 12.7054 16.7088 12.7078 16.7064L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929C16.3166 10.9024 15.6834 10.9024 15.2929 11.2929L13 13.5858V2Z"
        fill={iconColor}
      />
      <Path
        d="M3 16C3.55228 16 4 16.4477 4 17V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V17C20 16.4477 20.4477 16 21 16C21.5523 16 22 16.4477 22 17V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V17C2 16.4477 2.44772 16 3 16Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const DownloadIcon = assignWithoutSideEffects(_DownloadIcon, {
  componentId: 'DownloadIcon',
});

export default DownloadIcon;
