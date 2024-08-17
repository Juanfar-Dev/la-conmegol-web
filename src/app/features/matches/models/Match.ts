export interface Match {
  id: number;
  round: number;
  away_team: number;
  home_team: number;
  away_score?: number;
  away_negative_score?: number;
  home_score?: number;
  home_negative_score?: number;
  away_points?: number;
  home_points?: number;
  tournament: number;
  game_over: boolean;
}
