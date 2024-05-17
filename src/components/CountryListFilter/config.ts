interface Option {
  value: number;
  label: string;
}

export const options: Option[] = [
  { value: 0, label: 'Population' },
  { value: 1000000, label: '< 1M' },
  { value: 5000000, label: '< 5M' },
  { value: 10000000, label: '< 10M' }
];
