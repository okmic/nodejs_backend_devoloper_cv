type PropsType = {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export default function MaxIconI({
  width = 400,
  height = 140,
  className = '',
}: PropsType) {
  return  <img src="https://maxicons.ru/icons/MAX.svg" alt="MAX" width={width} height={height} className={className}  />
}
