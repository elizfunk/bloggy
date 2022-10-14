type Alignment = 'start' | 'end'
type Side = 'top' | 'right' | 'bottom' | 'left'
type AlignedPlacement = `${Side}-${Alignment}`
type Placement = Side | AlignedPlacement

type Logical =
  | "start-start"
  | "start-end"
  | "end-start"
  | "end-end"
  | "start"
  | "end"

type PlacementWithLogical = Placement | Logical

export type { Placement, PlacementWithLogical }
