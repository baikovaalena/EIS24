import { iconColdWater, iconHotWater } from '@shared/images';

export type CounterType = 'ColdWaterAreaMeter' | 'HotWaterAreaMeter';

const TYPE_LABELS: Record<CounterType, string> = {
  ColdWaterAreaMeter: 'ХВС',
  HotWaterAreaMeter: 'ГВС',
};

const TYPE_ICONS: Record<CounterType, string> = {
  ColdWaterAreaMeter: iconColdWater,
  HotWaterAreaMeter: iconHotWater,
};

export const formatCounterType = (
  counterTypes: readonly CounterType[]
): string =>
  counterTypes
    .map((type) => TYPE_LABELS[type])
    .filter(Boolean)
    .join(' / ') || '-';

export const getCounterTypeIcon = (type: CounterType): string =>
  TYPE_ICONS[type];
