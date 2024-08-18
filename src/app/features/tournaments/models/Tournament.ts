import { Match } from "../../matches/models/Match";
import { Player } from "../../players/models/Player";
import { Team } from "../../teams/models/Team";

export interface Tournament {
  id: number;
  name: string;
  status: string;
  remaining: number;
  location: string;
  favorite: boolean;
  mode: string;
  teamsCount: number;
  teams?: Team[];
  players?: Player[];
  matches?: Match[];
}