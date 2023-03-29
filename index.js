const express = require('express');
const app = express();

const resolve = (res, status, message) => {
  console.log({
    status, message
  })
  res.status(parseInt(status)).json({
    message
  });
}

app.post('/', (req, res) => {
  const status = req.get('Authorization');

  if (status) {
    resolve(res, status, `Status changed to ${status}`)
  } else {
    resolve(res, 200, 'OK')
  }
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
