type NetworkInformationLike = {
  saveData?: boolean;
  effectiveType?: string;
};

type NavigatorWithConnection = Navigator & {
  connection?: NetworkInformationLike;
};

export function canPrefetchOnConnection() {
  if (typeof navigator === 'undefined') return true;

  const connection = (navigator as NavigatorWithConnection).connection;
  const saveData = !!connection?.saveData;
  const slowNetwork = ['slow-2g', '2g'].includes(
    connection?.effectiveType ?? ''
  );

  return !saveData && !slowNetwork;
}
