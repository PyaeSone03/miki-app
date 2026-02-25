import { useEffect, useMemo, useRef, useState } from "react";

export default function TextType({
  text,
  texts,
  loop = true,
  finalText,
  typingSpeed = 75,
  deletingSpeed = 50,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
  cursorBlinkDuration = 0.5,
}) {
  const source = useMemo(() => {
    if (Array.isArray(texts) && texts.length > 0) return texts;
    if (Array.isArray(text) && text.length > 0) return text;
    if (typeof text === "string" && text.length > 0) return [text];
    return [""];
  }, [text, texts]);

  const [state, setState] = useState({
    display: "",
    wordIndex: 0,
    isDeleting: false,
    isComplete: false,
  });
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (state.isComplete) return;

    const current = source[state.wordIndex % source.length] ?? "";
    const delay =
      !state.isDeleting && state.display === current
        ? pauseDuration
        : state.isDeleting
          ? deletingSpeed
          : typingSpeed;

    timeoutRef.current = setTimeout(() => {
      setState((prev) => {
        if (prev.isComplete) return prev;

        const active = source[prev.wordIndex % source.length] ?? "";

        if (!prev.isDeleting && prev.display === active) {
          if (!loop && prev.wordIndex === source.length - 1) {
            return {
              ...prev,
              display: finalText ?? active,
              isComplete: true,
              isDeleting: false,
            };
          }
          return { ...prev, isDeleting: true };
        }

        if (prev.isDeleting && prev.display.length === 0) {
          return {
            display: "",
            wordIndex: loop
              ? (prev.wordIndex + 1) % source.length
              : Math.min(prev.wordIndex + 1, source.length - 1),
            isDeleting: false,
            isComplete: false,
          };
        }

        return {
          ...prev,
          display: prev.isDeleting
            ? prev.display.slice(0, -1)
            : active.slice(0, prev.display.length + 1),
        };
      });
    }, delay);

    return () => clearTimeout(timeoutRef.current);
  }, [source, state, typingSpeed, deletingSpeed, pauseDuration, loop, finalText]);

  return (
    <span>
      {state.display}
      {showCursor ? (
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            marginLeft: "0.2ch",
            animation: `texttype-blink ${cursorBlinkDuration}s step-end infinite`,
          }}
        >
          {cursorCharacter}
        </span>
      ) : null}
    </span>
  );
}
