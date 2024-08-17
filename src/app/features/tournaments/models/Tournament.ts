import { Match } from "../../matches/models/Match";
import { Player } from "../../players/models/Player";
import { Team } from "../../teams/models/Team";

export interface Tournament {
  id: number;
  name: string;
  active: boolean;
  remaining: string;
  location: string;
  favorite: boolean;
  teams: Team[];
  Players: Player[];
  Matches: Match[];
}