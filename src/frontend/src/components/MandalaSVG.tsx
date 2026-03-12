export const MandalaSVG = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="100"
      cy="100"
      r="90"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    />
    <circle
      cx="100"
      cy="100"
      r="75"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
    />
    <circle
      cx="100"
      cy="100"
      r="60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    />
    <circle
      cx="100"
      cy="100"
      r="45"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
    />
    <circle
      cx="100"
      cy="100"
      r="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    />
    <circle
      cx="100"
      cy="100"
      r="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
    />
    {[0, 30, 60, 90, 120, 150].map((angle) => (
      <line
        key={`main-${angle}`}
        x1="100"
        y1="10"
        x2="100"
        y2="190"
        stroke="currentColor"
        strokeWidth="0.5"
        transform={`rotate(${angle} 100 100)`}
      />
    ))}
    {[15, 45, 75, 105, 135, 165].map((angle) => (
      <line
        key={`sub-${angle}`}
        x1="100"
        y1="40"
        x2="100"
        y2="160"
        stroke="currentColor"
        strokeWidth="0.4"
        transform={`rotate(${angle} 100 100)`}
      />
    ))}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x = 100 + 60 * Math.cos(rad);
      const y = 100 + 60 * Math.sin(rad);
      return (
        <circle
          key={`petal-${angle}`}
          cx={x}
          cy={y}
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
        />
      );
    })}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 100 + 30 * Math.cos(rad);
      const y1 = 100 + 30 * Math.sin(rad);
      const x2 = 100 + 75 * Math.cos(rad);
      const y2 = 100 + 75 * Math.sin(rad);
      return (
        <line
          key={`spoke-${angle}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="currentColor"
          strokeWidth="0.4"
        />
      );
    })}
  </svg>
);

export default MandalaSVG;
