type Props = {
  label: string;
  color?: 'gray' | 'blue' | 'green';
};

const Sample = ({ label, color = 'gray' }: Props) => {
  const bgColor = {
    gray: 'bg-gray-500 text-gray-200',
    blue: 'bg-blue-500 text-blue-200',
    green: 'bg-green-500 text-green-200',
  }[color];

  return (
    <div className={`rounded-full px-3 py-1 text-sm font-medium ${bgColor}`}>
      {label}
    </div>
  );
};

export default Sample;
