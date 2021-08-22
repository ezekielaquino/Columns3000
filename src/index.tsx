import styled from '@emotion/styled';
import React from 'react';

type ColumnsBase = {
  columns: number;
  justify: React.CSSProperties['justifyContent'];
  gutter: string;
  breakpoint: string;
};

export type ColumnsType = Partial<ColumnsBase>;
export type ColumnType = {
  span: number;
  grow?: boolean;
  breakpoint?: string;
};

const BREAKPOINT = '720px';

export const Columns: React.FC<ColumnsType> = ({
  columns = 12,
  justify = 'flex-start',
  gutter = '16px',
  breakpoint = BREAKPOINT,
  children,
  ...rest
}) => {
  return (
    <WrapColumns
      columns={columns}
      justify={justify}
      gutter={gutter}
      breakpoint={breakpoint}
      {...rest}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child as React.ReactElement, {breakpoint}),
      )}
    </WrapColumns>
  );
};

export const Column: React.FC<ColumnType> = ({
  span,
  grow,
  breakpoint = BREAKPOINT,
  children,
  ...rest
}) => {
  return (
    <WrapColumn span={span} grow={grow} breakpoint={breakpoint} {...rest}>
      {children}
    </WrapColumn>
  );
};

const WrapColumns = styled.div<ColumnsBase>`
  --colCount: ${props => props.columns};
  --gutter: ${props => props.gutter};
  --breakpoint: ${props => props.breakpoint};
  margin: calc(${props => props.gutter} / -2);

  @media (min-width: ${props => props.breakpoint}) {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    box-sizing: border-box;
    justify-content: ${props => props.justify};
  }
`;

const WrapColumn = styled.div<ColumnType>`
  max-width: ${props => (props.grow ? 'unset' : 'var(--width)')};
  box-sizing: border-box;
  margin: calc(var(--gutter) / 2);

  @media (min-width: ${props => props.breakpoint}) {
    --width: ${props =>
      `calc((100% / (var(--colCount) / ${props.span})) - var(--gutter))`};
    flex: 0 0 var(--width);
  }

  @media (max-width: ${props => props.breakpoint}) {
    --width: 100%;
  }
`;
