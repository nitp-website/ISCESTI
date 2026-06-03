import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const counterFilePath = path.join(process.cwd(), 'data', 'visitor-count.json');
const initialCount = 0;

let writeQueue = Promise.resolve();

async function ensureCounterFile() {
  const dirPath = path.dirname(counterFilePath);
  await fs.mkdir(dirPath, { recursive: true });

  try {
    await fs.access(counterFilePath);
  } catch {
    await fs.writeFile(counterFilePath, JSON.stringify({ count: initialCount }, null, 2), 'utf8');
  }
}

async function readCounter() {
  await ensureCounterFile();
  const raw = await fs.readFile(counterFilePath, 'utf8');
  const parsed = JSON.parse(raw);
  const count = Number(parsed?.count);
  return Number.isFinite(count) ? count : initialCount;
}

async function writeCounter(count) {
  await fs.writeFile(counterFilePath, JSON.stringify({ count }, null, 2), 'utf8');
}

function enqueueMutation(task) {
  writeQueue = writeQueue.then(task, task);
  return writeQueue;
}

export async function GET() {
  try {
    const count = await readCounter();
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ error: 'Unable to read visitor count' }, { status: 500 });
  }
}

export async function POST() {
  try {
    const count = await enqueueMutation(async () => {
      const current = await readCounter();
      const updated = current + 1;
      await writeCounter(updated);
      return updated;
    });

    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ error: 'Unable to update visitor count' }, { status: 500 });
  }
}
