export interface ICompetition {
  id: number
  area: ICompetitionArea
  name: string
  code: string
  emblemUrl: string
  plan: string
  lastUpdated: string
}

export interface ISeason {
  id: number
  startDate: string
  endDate: string
  currentMatchDay: number
  winner: string
}

export interface ICompetitionArea {
  id: number
  name: string
}

export interface ICompetitionTeam {
  id: number
  name: string
  shortName: string
  tla: string
  crestUrl: string
  address: string
  phone: string
  website: string
  email: string
  founded: number
  clubColors: string
  venue: string
  lastUpdated: string
}

export interface ICompetitionTeams {
  count: number
  season: ISeason
  teams: ICompetitionTeam[]
  competition: ICompetition
}

export interface ICompetitionMatches {
  count: number
  competition: ICompetition
  matches: IMatch[]
}

export interface IMatch {
  id: number
  season: ISeason
  utcDate: string
  status: string
  matchday: number
  stage: string
  group: string
  lastUpdated: string
  homeTeam: IMatchTeam
  awayTeam: IMatchTeam
}

export interface IMatchTeam {
  id: number
  name: string
}

export interface ITeam {
  id: number
  activeCompetitions: ITeamActiveCompetition[]
  squad: ITeamPlayer[]
}

export interface ITeamPlayer {
  id: number
  name: string
  position: string
  dateOfBirth: string
  countryOfBirth: string
  nationality: string
  shirtNumber: number
  role: string
}

export interface ITeamActiveCompetition {
  id: number
  name: string
}
