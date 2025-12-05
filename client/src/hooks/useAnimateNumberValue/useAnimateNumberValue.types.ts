export type UseAnimateNumberValueParams = {
  start: number;
  end: number;
  transformer: (value: number) => string;
  onComplete?: () => void;
};
