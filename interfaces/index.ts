export interface mapDataProps {
  details: Array<mapDataDetails>;
}

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
  mapData: mapDataProps;
  svgWidth: number;
  svgHeight: number;
  viewBoxWidth: number;
  viewBoxHeight: number;
  showInfoBox: boolean;
}

export interface CustomButtonProps {
  isSelected: boolean;
  onClick: () => void;
}
