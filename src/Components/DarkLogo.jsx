const DarkLogo = ({ width = 120 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={(width / 210) * 80} // Keep ratio same as viewBox
    viewBox="0 0 210 80"
  >
    <text
      x="0"
      y="60"
      fontFamily="Montserrat"
      fontWeight="700"
      fontSize="60"
      fill="#FFF" // White text for dark mode
    >
      ADIL
    </text>
    <circle cx="155" cy="68" r="5" fill="#E50914" />
  </svg>
);

export default DarkLogo;