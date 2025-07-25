import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _InboxIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7 3H7.3003C6.1131 2.99946 5.03671 3.69961 4.55568 4.785L1.09497 12.5741C1.03406 12.7033 1 12.8477 1 13V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V13C23 12.9868 22.9997 12.9736 22.9992 12.9604C22.9938 12.8216 22.9601 12.69 22.9037 12.5713L19.4126 4.78105C19.4063 4.76715 19.3998 4.75339 19.3929 4.73979C19.2342 4.42502 18.938 4.0135 18.5158 3.67027C18.085 3.32012 17.4693 3 16.7 3ZM20.456 12L17.5993 5.62534C17.5516 5.53762 17.4313 5.36618 17.2542 5.22223C17.075 5.07655 16.8907 5 16.7 5L7.29932 5C6.90343 4.99973 6.54465 5.23303 6.38432 5.595L3.53856 12H8C8.33435 12 8.64658 12.1671 8.83205 12.4453L10.5352 15H13.4648L15.1679 12.4453C15.3534 12.1671 15.6656 12 16 12H20.456ZM3 14V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V14H16.5352L14.8321 16.5547C14.6466 16.8329 14.3344 17 14 17H10C9.66565 17 9.35342 16.8329 9.16795 16.5547L7.46482 14H3Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const InboxIcon = assignWithoutSideEffects(_InboxIcon, {
  componentId: 'InboxIcon',
});

export default InboxIcon;
