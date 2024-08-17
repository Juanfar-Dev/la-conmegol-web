import { Player } from "../../players/models/Player";

export interface Team {
  id: number;
  name: string;
  players: Player[];
}
