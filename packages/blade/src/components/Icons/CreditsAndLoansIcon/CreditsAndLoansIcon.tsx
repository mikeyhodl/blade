import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _CreditsAndLoansIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.51363 6.17762C5.92422 6.82722 4 9.18368 4 12C4 14.8163 5.92422 17.1728 8.51364 17.8224C6.96606 16.3636 6 14.2946 6 12C6 9.70539 6.96605 7.63642 8.51363 6.17762ZM11.9731 4.25901C11.8009 4.21381 11.6264 4.17426 11.4499 4.14057C10.9658 4.0482 10.467 4 9.95782 4C5.55715 4 2 7.58743 2 12C2 16.4126 5.55715 20 9.95782 20C10.6438 20 11.3108 19.9125 11.948 19.7475L11.9443 19.7334C12.6003 19.9073 13.2893 20 14 20C18.4183 20 22 16.4183 22 12C22 7.58172 18.4183 4 14 4C13.2997 4 12.6204 4.08998 11.9731 4.25901ZM14 6C10.6863 6 8 8.68629 8 12C8 15.3137 10.6863 18 14 18C17.3137 18 20 15.3137 20 12C20 8.68629 17.3137 6 14 6Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const CreditsAndLoansIcon = assignWithoutSideEffects(_CreditsAndLoansIcon, {
  componentId: 'CreditsAndLoansIcon',
});

export default CreditsAndLoansIcon;
