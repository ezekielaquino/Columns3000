import styled from '@emotion/styled';
import React from 'react';

type ColumnsBase = {
  columns: number;
  justify: React.CSSProperties['justifyContent'];
  gutter: string;
  breakpoint: string;
  className?: string;
};

export type ColumnsType = Partial<ColumnsBase>;
export type ColumnType = {
  span: number;
  grow?: boolean;
  breakpoint?: string;
  className?: string;
};

const BREAKPOINT = '720px';

export const Columns: React.FC<ColumnsType> = ({
  columns = 12,
  justify = 'flex-start',
  gutter = '16px',
  breakpoint = BREAKPOINT,
  className,
  children,
  ...rest
}) => {
  return (
    <WrapColumns
      className={className}
      columns={columns}
      justify={justify}
      gutter={gutter}
      breakpoint={breakpoint}
      {...rest}
    >
      {React.Children.map(
        React.Children.toArray(children).filter(Boolean),
        child => React.cloneElement(child as React.ReactElement, {breakpoint}),
      )}
    </WrapColumns>
  );
};

export const Column: React.FC<ColumnType> = ({
  span,
  grow,
  breakpoint = BREAKPOINT,
  children,
  className,
  ...rest
}) => {
  return (
    <WrapColumn
      className={className}
      span={span}
      grow={grow}
      breakpoint={breakpoint}
      {...rest}
    >
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

  @media (max-width: ${props => props.breakpoint}) {
    > div + div {
      margin-top: var(--gutter);
    }
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
