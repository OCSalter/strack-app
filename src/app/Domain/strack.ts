import { UUID } from "crypto";

export interface User {
    id: UUID;
    name: String;
}

export interface Group {
    id: UUID;
    name: String;
}

export interface MatchTag {
    id: UUID;
    groupId: UUID;
    modeId: UUID
}

export interface MatchPreview {
    id: UUID;
    modeName: string;
    teamIdList: UUID[];
}

export interface TeamTag {
    id: UUID;
    matchId: UUID;
}

export interface Team {
    id: UUID;
    userList: User[];
}

export interface PlayerTag {
    id: UUID;
    userId: UUID;
    teamId: UUID;
    matchId: UUID;
}

export interface Stat {
    id: UUID;
    typeId: UUID;
    referenceId: UUID;
    value: number;
}


export interface UserMatchView{
    matchId: UUID;
    modeName: String;
    teamList: Team[];
    userTeamStat: Stat[]
}