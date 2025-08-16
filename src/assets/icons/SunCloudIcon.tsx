import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../../constants/colors';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const SunCloudIcon = ({
  width = 32,
  height = 32,
  color = COLORS.secondary,
}: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M17.5 17.5c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5c-6.25-1-6.25-9.5 0-8.5 4.5 0 4.5 4 4.5 4"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.5 22a8.32 8.32 0 01-5.5-2 5.5 5.5 0 01-5.5-5.5c0-4.5 2-5.5 2-5.5"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SunCloudIcon;
