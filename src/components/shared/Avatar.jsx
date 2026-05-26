export default function Avatar({ initials, bg, color, size = 32 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.38,
        fontWeight: 600,
        color: color,
        flexShrink: 0,
        boxShadow: "inset 0px 2px 4px rgba(0,0,0,0.15)",
      }}
    >
      {initials}
    </div>
  );
}
