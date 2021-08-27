import React from 'react';
declare type ColumnsBase = {
    columns: number;
    justify: React.CSSProperties['justifyContent'];
    gutter: string;
    breakpoint: string;
    className?: string;
};
export declare type ColumnsType = Partial<ColumnsBase>;
export declare type ColumnType = {
    span: number;
    grow?: boolean;
    breakpoint?: string;
    className?: string;
};
export declare const Columns: React.FC<ColumnsType>;
export declare const Column: React.FC<ColumnType>;
export {};
