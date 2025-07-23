import { JSX } from 'react';

export default function Title({ h, children }: { h: number; children?: React.ReactNode }) {
  if (1 <= h && h <= 6) {
    const Tag = `h${h}` as keyof JSX.IntrinsicElements;

    const styles = `${h === 1 ? 'text-[55px]' : h === 2 ? 'text-[36px]' : h === 3 ? 'text-[24px]' : h === 4 ? 'text-[22px]' : h === 5 ? 'text-[20px]' : h === 6 ? 'base' : 'base'} font-semibold text-foreground font-lexend`;

    return <Tag className={styles}>{children}</Tag>;
  }
}
