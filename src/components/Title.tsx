'use client';
import { JSX } from 'react';

export default function Title({ h, children }: { h: number; children?: React.ReactNode }) {
  if (1 <= h && h <= 6) {
    const Tag = `h${h}` as keyof JSX.IntrinsicElements;

    const styles = `${h === 1 ? 'lg:text-[55px]' : h === 2 ? 'lg:text-[36px]' : h === 3 ? 'lg:text-[24px]' : h === 4 ? 'lg:text-[22px]' : h === 5 ? 'lg:text-[20px]' : h === 6 ? 'base' : 'base'} font-semibold text-foreground font-lexend leading-tight text-[30px]`;

    return <Tag className={styles}>{children}</Tag>;
  }
}
