const SVG = ({
  style = {},
  fill = '#fff',
  width = '100%',
  d = '',
  className = '',
  height = '100%',
  viewBox = '0 0 32 32',
}) => {
  return (
    <svg
      width={width}
      style={style}
      height={height}
      viewBox={viewBox}
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d={d} />
    </svg>
  )
}

export default SVG
