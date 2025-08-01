import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _BuildingIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.25 10.1914C10.8023 10.1914 11.25 10.6391 11.25 11.1914V12.6914C11.25 13.2437 10.8023 13.6914 10.25 13.6914C9.69771 13.6914 9.25 13.2437 9.25 12.6914V11.1914C9.25 10.6391 9.69771 10.1914 10.25 10.1914Z"
        fill={iconColor}
      />
      <Path
        d="M7.25 10.1914C7.80228 10.1914 8.25 10.6391 8.25 11.1914V12.6914C8.25 13.2437 7.80228 13.6914 7.25 13.6914C6.69772 13.6914 6.25 13.2437 6.25 12.6914V11.1914C6.25 10.6391 6.69772 10.1914 7.25 10.1914Z"
        fill={iconColor}
      />
      <Path
        d="M7.25 15.4414C7.80228 15.4414 8.25 15.8891 8.25 16.4414V17.9414C8.25 18.4937 7.80228 18.9414 7.25 18.9414C6.69772 18.9414 6.25 18.4937 6.25 17.9414V16.4414C6.25 15.8891 6.69772 15.4414 7.25 15.4414Z"
        fill={iconColor}
      />
      <Path
        d="M10.25 15.4414C10.8023 15.4414 11.25 15.8891 11.25 16.4414V17.9414C11.25 18.4937 10.8023 18.9414 10.25 18.9414C9.69771 18.9414 9.25 18.4937 9.25 17.9414V16.4414C9.25 15.8891 9.69771 15.4414 10.25 15.4414Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1764 4.06198C14.1764 2.46067 12.3884 1.50869 11.0598 2.4027L4.00059 7.15314C3.44835 7.52476 3.11719 8.14678 3.11719 8.81242V19.9414H2C1.44772 19.9414 1 20.3891 1 20.9414C1 21.4937 1.44772 21.9414 2 21.9414H23C23.5523 21.9414 24 21.4937 24 20.9414C24 20.3891 23.5523 19.9414 23 19.9414H21.75V9.69141C21.75 9.22728 21.5656 8.78216 21.2374 8.45397C20.9092 8.12578 20.4641 7.94141 20 7.94141H14.1764V4.06198ZM14.1764 9.94141V19.9414H19.75V9.94141H14.1764ZM12.1764 19.9414L12.1764 4.06198L5.11719 8.81242V19.9414H12.1764Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const BuildingIcon = assignWithoutSideEffects(_BuildingIcon, {
  componentId: 'BuildingIcon',
});

export default BuildingIcon;
