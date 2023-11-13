import { drawingMode } from '../consts/drawingMode';
import { colors } from '../consts/color';
import { difficultyLevels } from '../consts/difficultyLevel';

export type DrawMode = ValueOf<typeof drawingMode>;
export type Color = ValueOf<typeof colors>;
export type DifficultyLevels = ValueOf<typeof difficultyLevels>;
