import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _InstantSettlementIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2124 0.0652643C15.6005 0.21277 15.8572 0.584804 15.8572 1.00004V9.77782H20C20.3938 9.77782 20.7508 10.0089 20.9122 10.368C21.0735 10.7272 21.0091 11.1476 20.7476 11.4419L9.8905 23.6642C9.61473 23.9746 9.1758 24.0823 8.78764 23.9348C8.39949 23.7873 8.14287 23.4153 8.14287 23V14.2223H4.00002C3.60628 14.2223 3.2492 13.9912 3.08784 13.6321C2.92649 13.2729 2.99091 12.8525 3.25239 12.5581L14.1095 0.335921C14.3853 0.0254781 14.8242 -0.0822411 15.2124 0.0652643ZM6.2259 12.2223H9.14287C9.69516 12.2223 10.1429 12.67 10.1429 13.2223V20.3686L17.7741 11.7778H14.8572C14.3049 11.7778 13.8572 11.3301 13.8572 10.7778V3.63152L6.2259 12.2223Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const InstantSettlementIcon = assignWithoutSideEffects(_InstantSettlementIcon, {
  componentId: 'InstantSettlementIcon',
});

export default InstantSettlementIcon;
