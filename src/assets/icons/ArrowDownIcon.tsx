import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../../constants/colors';

interface IconProps {
  size?: number;
  color?: string;
}

const ArrowDownIcon = ({ size = 12, color = COLORS.red }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M6 9L12 15L18 9"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowDownIcon;
