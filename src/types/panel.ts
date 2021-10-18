import { Selection, ZoomBehavior } from 'd3'
import { FitViewFunc, FlowTransform, Rect, XYPosition } from './types'

export type D3Zoom = ZoomBehavior<HTMLDivElement, unknown>
export type D3Selection = Selection<HTMLDivElement, unknown, any, any>
export type D3ZoomHandler = (this: HTMLDivElement, event: any, d: unknown) => void

export type KeyCode = number | string

export enum PanOnScrollMode {
  Free = 'free',
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

export interface ZoomPanHelperFunctions {
  zoomIn: () => void
  zoomOut: () => void
  zoomTo: (zoomLevel: number) => void
  transform: (transform: FlowTransform) => void
  fitView: FitViewFunc
  setCenter: (x: number, y: number, zoom?: number) => void
  fitBounds: (bounds: Rect, padding?: number) => void
  project: (position: XYPosition) => XYPosition
}

export type InitD3ZoomPayload = {
  d3Zoom: D3Zoom
  d3Selection: D3Selection
  d3ZoomHandler: D3ZoomHandler
}
