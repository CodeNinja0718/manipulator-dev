import axios from 'axios';
import { get } from 'lodash';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const params = req.body;
    const data = JSON.stringify({
      ...params,
      token_api_key: process.env.VERITRANS_API_KEY,
    });
    const config = {
      method: 'post',
      url: `${process.env.VERITRANS_API_URL}/4gtoken`,
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };
    const result = await axios(config);
    return res.status(200).json({ data: result.data });
  } catch (error) {
    return res
      .status(get(error, 'response.status') as unknown as number)
      .send(get(error, 'response.data'));
  }
}
