import { drawingMode } from '../consts/drawingMode.ts';
import { color } from '../consts/color.ts';
import { difficultyLevel } from '../consts/difficultyLevel.ts';

export type DrawMode = (typeof drawingMode)[keyof typeof drawingMode];
export type Color = (typeof color)[keyof typeof color];
export type DifficultyLevels = (typeof difficultyLevel)[keyof typeof difficultyLevel];
