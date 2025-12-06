export type NavigationTabBaseProps<T = never> = {
  id: string;
  name: string;
  tabs?: T[];
};

export type NavigationTabComponentProps = {
  active: boolean;
  onClick: () => void;
};
