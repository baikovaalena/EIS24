import { iconColdWater, iconHotWater } from '@shared/images';
import type { TCounterType } from './counterTypes';

interface ICounterTypeConfig {
  type: TCounterType;
  label: string;
  icon: string;
}

const COUNTER_TYPE_CONFIGS: ICounterTypeConfig[] = [
  { type: 'ColdWaterAreaMeter', label: 'ХВС', icon: iconColdWater },
  { type: 'HotWaterAreaMeter', label: 'ГВС', icon: iconHotWater },
];

export const formatCounterType = (counterTypes: TCounterType[]): string =>
  counterTypes
    .map((type) => COUNTER_TYPE_CONFIGS.find((c) => c.type === type)?.label)
    .filter(Boolean)
    .join(' / ') || '-';

export const getCounterTypeIcon = (type: TCounterType): string =>
  COUNTER_TYPE_CONFIGS.find((c) => c.type === type)?.icon ?? '';
