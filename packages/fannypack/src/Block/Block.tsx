import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalBlockProps = {};
export type BlockProps = BoxProps & LocalBlockProps;

Block.defaultProps = {};

function useProps(props: Partial<BlockProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.Block,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}
Block.useProps = useProps;

export function Block(props: BlockProps) {
  const { use, children, ...restProps } = props;
  const htmlProps = useProps(restProps);
  return (
    <utils.Element component={ReakitBox} use={use} htmlProps={htmlProps}>
      {children}
    </utils.Element>
  );
}
