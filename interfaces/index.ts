import React, { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';

export interface mapDataDetails {
  level: number;
  title: string;
  description: string;
  y: number;
  x: number;
  levelImageUrl: string;
}

export interface TranslateProps {
  x: number;
  y: number;
  children: JSX.Element;
}

export interface MapProps {
  MapSvg: React.FC;
  mapData: mapDataDetails[] | [];
  showButtons: boolean;
  showInfoBox: boolean;
  viewBoxWidth: number;
  viewBoxHeight: number;
  childSvgWidth: number;
  childSvgHeight: number;
}

export interface CustomButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: 'default' | 'selected';
  handleClick?: () => void;
}

export interface InfoBoxProps {
  title?: string;
  description?: string;
  levelImageUrl?: string;
  level?: Number;
}
