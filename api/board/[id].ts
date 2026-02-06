import { notion } from '../_lib/notion.ts';

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const results = await notion.getPage(id);

    res.status(200).json(results);
  } catch (e) {
    res.status(500).json({ error: `내부 서버 에러: ${e}` });
  }
}
