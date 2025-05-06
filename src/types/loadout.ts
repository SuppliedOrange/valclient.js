import { LoadoutResponse } from "@interfaces/loadout";
import {
    KnifeSkin,
    AresSkin,
    BuckySkin,
    BulldogSkin,
    ClassicSkin,
    FrenzySkin,
    GhostSkin,
    GuardianSkin,
    JudgeSkin,
    MarshalSkin,
    OdinSkin,
    OperatorSkin,
    PhantomSkin,
    SheriffSkin,
    ShortySkin,
    SpectreSkin,
    StingerSkin,
    VandalSkin,
    OutlawSkin,
} from "@type/skins";
import { BuddyType } from "@type/buddies";
import { SprayType } from "@type/sprays";

export const guns = [
    "Odin",
    "Ares",
    "Vandal",
    "Bulldog",
    "Phantom",
    "Judge",
    "Bucky",
    "Frenzy",
    "Classic",
    "Ghost",
    "Sheriff",
    "Shorty",
    "Operator",
    "Guardian",
    "Marshal",
    "Spectre",
    "Stinger",
    "Knife",
    "Outlaw",
] as const;

export type GunsType = typeof guns[number];

export type SkinsType<T> = T extends "Knife"
    ? KnifeSkin
    : T extends "Stinger"
    ? StingerSkin
    : T extends "Spectre"
    ? SpectreSkin
    : T extends "Marshal"
    ? MarshalSkin
    : T extends "Guardian"
    ? GuardianSkin
    : T extends "Operator"
    ? OperatorSkin
    : T extends "Shorty"
    ? ShortySkin
    : T extends "Sheriff"
    ? SheriffSkin
    : T extends "Ghost"
    ? GhostSkin
    : T extends "Classic"
    ? ClassicSkin
    : T extends "Frenzy"
    ? FrenzySkin
    : T extends "Bucky"
    ? BuckySkin
    : T extends "Judge"
    ? JudgeSkin
    : T extends "Phantom"
    ? PhantomSkin
    : T extends "Bulldog"
    ? BulldogSkin
    : T extends "Vandal"
    ? VandalSkin
    : T extends "Ares"
    ? AresSkin
    : T extends "Odin"
    ? OdinSkin
    : null;

export type Levels = "Level 1" | "Level 2" | "Level 3" | "Level 4" | "Level 5";

export type CharmLevels = "1" | "2" | "3" | "4";

export type SkinsIdMappedByGunName = {
    [gun in GunsType]: Record<SkinsType<gun>, string>;
};
export type SkinsLevelsMapped = {
    [skin in
        | KnifeSkin
        | StingerSkin
        | SpectreSkin
        | MarshalSkin
        | GuardianSkin
        | OperatorSkin
        | ShortySkin
        | SheriffSkin
        | GhostSkin
        | ClassicSkin
        | FrenzySkin
        | BuckySkin
        | JudgeSkin
        | PhantomSkin
        | BulldogSkin
        | VandalSkin
        | AresSkin
        | OutlawSkin
        | OdinSkin]: {
        [level in Levels]?: string;
    };
};

export type SkinsVariantsMapped = {
    [skin in
        | KnifeSkin
        | StingerSkin
        | SpectreSkin
        | MarshalSkin
        | GuardianSkin
        | OperatorSkin
        | ShortySkin
        | SheriffSkin
        | GhostSkin
        | ClassicSkin
        | FrenzySkin
        | BuckySkin
        | JudgeSkin
        | PhantomSkin
        | BulldogSkin
        | VandalSkin
        | AresSkin
        | OutlawSkin
        | OdinSkin]: {
        [key: string]: string;
        Default: string;
    };
};

export type BuddyIdMappedByName = Record<BuddyType, string>;

export type BuddyLevelIdMappedByName = Record<BuddyType, { [key in CharmLevels]?: string }>;

export type SprayIdMappedByName = Record<SprayType, string>;

export type SprayLevelIdMappedByName = Record<SprayType, { [key in CharmLevels]?: string }>;

export type LoadoutBody = Pick<LoadoutResponse, "Guns" | "Sprays" | "Identity" | "Incognito">;

export type SprayRounds = "PreRound" | "MiddleRound" | "EndRound";
