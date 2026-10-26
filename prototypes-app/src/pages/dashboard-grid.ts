/* Grid layout engine for the customizable dashboard.
   A 12-column grid with fixed-height rows. Items are rectangles in grid units and never overlap.

   Compared with a plain "push down on collision" grid:
   - Dropping onto a single item of the same size swaps the two, instead of shoving everything.
   - Items rest as high as they can (vertical compaction) in reading order, so nothing floats.
   - New widgets take the first free slot (first-fit) instead of always going to the bottom.
   - The dragged item's target is clamped so it can never float below the last row. */

export const COLS = 12;

export interface Rect { x: number; y: number; w: number; h: number }
export type Placed = Rect & { key: string };

export const hits = (a: Rect, b: Rect) => a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;

const byReadingOrder = (a: Rect, b: Rect) => a.y - b.y || a.x - b.x;

export const bottomOf = (items: Rect[]) => items.reduce((m, i) => Math.max(m, i.y + i.h), 0);

/** Rest every item as high as it can go, in reading order. `fixed` items stay where they are. */
export const compact = <T extends Placed>(items: T[], fixed: Rect[] = []): T[] => {
  const placed: Rect[] = [...fixed];
  const out = new Map<string, T>();
  [...items].sort(byReadingOrder).forEach((it) => {
    let y = Math.max(0, it.y);
    while (y > 0 && !placed.some((p) => hits({ ...it, y: y - 1 }, p))) y -= 1;
    while (placed.some((p) => hits({ ...it, y }, p))) y += 1;
    const next = { ...it, y };
    placed.push(next);
    out.set(it.key, next);
  });
  return items.map((i) => out.get(i.key) as T);
};

/** First free slot for a w x h item, scanning rows top to bottom and columns left to right. */
export const firstFit = (items: Rect[], w: number, h: number): { x: number; y: number } => {
  const limit = bottomOf(items) + 1;
  for (let y = 0; y <= limit; y += 1) {
    for (let x = 0; x + w <= COLS; x += 1) {
      if (!items.some((i) => hits({ x, y, w, h }, i))) return { x, y };
    }
  }
  return { x: 0, y: limit };
};

/** Move one item to (x, y) and settle the rest around it. */
export const moveItem = <T extends Placed>(items: T[], key: string, x: number, y: number): T[] => {
  const m = items.find((i) => i.key === key);
  if (!m) return items;
  const others = items.filter((i) => i.key !== key);
  const tx = Math.max(0, Math.min(x, COLS - m.w));
  const ty = Math.max(0, Math.min(y, bottomOf(others)));
  const target = { ...m, x: tx, y: ty };

  const overlapped = others.filter((o) => hits(target, o));
  if (overlapped.length === 1 && overlapped[0].w === m.w && overlapped[0].h === m.h) {
    const o = overlapped[0];
    const moved = { ...m, x: o.x, y: o.y };
    const rest = compact(others.map((i) => (i.key === o.key ? { ...i, x: m.x, y: m.y } : i)), [moved]);
    return items.map((i) => (i.key === key ? moved : (rest.find((r) => r.key === i.key) as T)));
  }

  const rest = compact(others, [target]);
  return items.map((i) => (i.key === key ? target : (rest.find((r) => r.key === i.key) as T)));
};
