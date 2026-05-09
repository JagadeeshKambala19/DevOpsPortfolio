import { useRef } from "react";

interface GlyphTextProps {
  text: string;
  className?: string;
}

interface Glyph {
  char: string;
  key: string;
  style: React.CSSProperties;
}

export default function GlyphText({ text, className = "" }: GlyphTextProps) {
  const glyphsRef = useRef<Glyph[] | null>(null);

  if (!glyphsRef.current) {
    glyphsRef.current = text.split("").map((char, i) => {
      const delay = Math.random() * 3;
      const duration = 2 + Math.random() * 2;

      return {
        char,
        key: `${char}-${i}`,
        style: {
          animation: `glyph-shine ${duration}s ease-in-out infinite`,
          animationDelay: `${delay}s`,
        },
      };
    });
  }

  const glyphs = glyphsRef.current;

  return (
    <span className={`inline-flex flex-wrap leading-relaxed ${className}`}>
      {glyphs.map(({ char, key, style }) => (
        <span key={key} style={style} className="inline-block text-white/70">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}