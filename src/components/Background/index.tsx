import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import { ReactNode } from "react";

type BackgroundProps = {
  children: ReactNode;
};

export function Background({ children }: BackgroundProps) {
  const { secondary80, secondary100 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}