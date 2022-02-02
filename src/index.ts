#!/usr/bin/env node

import express, { Request, Response } from 'express';

const app = express();

app.get('/', (request: Request, response: Response) => {
  response.send('OK');
});

app.listen(3005, () => {
  console.log('Server listening on PORT: 3005');
});
