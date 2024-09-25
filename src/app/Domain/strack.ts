import { UUID } from "crypto";

export interface User {
    id: UUID;
    name: String;
}

export interface Group {
    id: UUID;
    name: String;
}

export interface Match {
    id: UUID;
    groupId: UUID;
    modeId: UUID
}

export interface TeamTag {
    id: UUID;
    matchId: UUID;
}

export interface PlayerTag {
    id: UUID;
    userId: UUID;
    teamId: UUID;
    matchId: UUID;
}
