import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const _CopyrightIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.6304 9.39112C12.1779 9.2086 12.769 9.20299 13.32 9.37509C13.8709 9.54718 14.3537 9.88826 14.7 10.35C15.0314 10.7918 15.6582 10.8814 16.1 10.55C16.5418 10.2186 16.6314 9.59183 16.3 9.15C15.7018 8.35245 14.8679 7.76332 13.9163 7.46606C12.9647 7.16881 11.9437 7.17849 10.9979 7.49375C10.0521 7.80902 9.22952 8.41387 8.6466 9.22263C8.06368 10.0314 7.75 11.0031 7.75 12C7.75 12.9969 8.06368 13.9686 8.6466 14.7774C9.22952 15.5861 10.0521 16.191 10.9979 16.5062C11.9437 16.8215 12.9647 16.8312 13.9163 16.5339C14.8679 16.2367 15.7018 15.6476 16.3 14.85C16.6314 14.4082 16.5418 13.7814 16.1 13.45C15.6582 13.1186 15.0314 13.2082 14.7 13.65C14.3537 14.1117 13.8709 14.4528 13.32 14.6249C12.769 14.797 12.1779 14.7914 11.6304 14.6089C11.0828 14.4264 10.6066 14.0762 10.2691 13.608C9.9316 13.1397 9.75 12.5772 9.75 12C9.75 11.4228 9.9316 10.8603 10.2691 10.392C10.6066 9.92382 11.0828 9.57364 11.6304 9.39112Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2ZM4.5 12C4.5 7.58172 8.08172 4 12.5 4C16.9183 4 20.5 7.58172 20.5 12C20.5 16.4183 16.9183 20 12.5 20C8.08172 20 4.5 16.4183 4.5 12Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const CopyrightIcon = assignWithoutSideEffects(_CopyrightIcon, {
  componentId: 'CopyrightIcon',
});

export default CopyrightIcon;
