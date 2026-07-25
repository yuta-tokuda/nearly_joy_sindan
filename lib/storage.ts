const ANSWERS_KEY = "nearly-joy-diagnosis-answers";
const ANSWERS_EVENT = "nearly-joy-answers-updated";
const EMPTY_ANSWERS: number[] = [];

let cachedRaw: string | null | undefined = undefined;
let cachedSnapshot: number[] = EMPTY_ANSWERS;

const parseAnswers = (raw: string | null): number[] => {
  if (!raw) return EMPTY_ANSWERS;

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return EMPTY_ANSWERS;
    const answers = parsed.filter(
      (value): value is number => typeof value === "number",
    );
    return answers.length === 0 ? EMPTY_ANSWERS : answers;
  } catch {
    return EMPTY_ANSWERS;
  }
};

export const saveAnswers = (answers: number[]) => {
  if (typeof window === "undefined") return;
  const raw = JSON.stringify(answers);
  window.localStorage.setItem(ANSWERS_KEY, raw);
  cachedRaw = raw;
  cachedSnapshot = answers.length === 0 ? EMPTY_ANSWERS : answers;
  window.dispatchEvent(new Event(ANSWERS_EVENT));
};

export const loadAnswers = () => getAnswersSnapshot();

export const clearAnswers = () => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(ANSWERS_KEY);
  cachedRaw = null;
  cachedSnapshot = EMPTY_ANSWERS;
  window.dispatchEvent(new Event(ANSWERS_EVENT));
};

export const subscribeAnswers = (onChange: () => void) => {
  if (typeof window === "undefined") return () => {};

  const handler = () => onChange();
  window.addEventListener("storage", handler);
  window.addEventListener(ANSWERS_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(ANSWERS_EVENT, handler);
  };
};

export const getAnswersSnapshot = () => {
  if (typeof window === "undefined") return EMPTY_ANSWERS;

  const raw = window.localStorage.getItem(ANSWERS_KEY);
  if (raw === cachedRaw) return cachedSnapshot;

  cachedRaw = raw;
  cachedSnapshot = parseAnswers(raw);
  return cachedSnapshot;
};

export const getServerAnswersSnapshot = () => EMPTY_ANSWERS;
