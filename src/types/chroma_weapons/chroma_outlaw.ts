/* eslint-disable prettier/prettier */
/* FILE GENERATED AUTOMATICALLY */

/* This file is split to avoid ESLint stack overflow */

export type OutlawChromaType<T> =   T extends "RGX 11z Pro Outlaw"
    ? "Default" | "Red" | "Blue" | "Yellow"
    :
    T extends "Araxys Outlaw"
    ? "Default" | "Purple" | "Black" | "Silver"
    :
    T extends "Bolt Outlaw"
    ? "Default" | "Red" | "Black" | "White"
    :
    T extends "Aperture Outlaw"
    ? "Default"
    :
    T extends "Overlay Outlaw"
    ? "Default" | "Black" | "Pink" | "Grey"
    :
    T extends "Moon Scout Outlaw"
    ? "Default"
    :
    T extends "EX.O Outlaw"
    ? "Default" | "Yellow" | "Red" | "Pink"
    :
    T extends "Prism//Reloaded Outlaw"
    ? "Default" | "Orange" | "Pink" | "Green"
    :
    T extends "Aquatica Outlaw"
    ? "Default"
    :
    T extends "Smite Outlaw"
    ? "Default"
    :
    T extends "Byteshift Outlaw"
    ? "Default" | "Purple" | "Red" | "Yellow"
    :
    T extends "Standard Outlaw"
    ? "Default"
    :
    T extends "Cloudweaver Outlaw"
    ? "Default"
    :
    T extends "Ego Outlaw"
    ? "Default" | "Red" | "Tan" | "Pink"
    :
    T extends "Holomoku Outlaw"
    ? "Default" | "DeepSea"
    :
  unknown;
