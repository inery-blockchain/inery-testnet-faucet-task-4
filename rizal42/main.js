const { Api, JsonRpc, JsSignatureProvider } = require('ineryjs');
const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios')
dotenv.config();

const account ="";
const PORT="";
const Node_url ="http://:8888";
const Private_key=""
const api = new Api({
  rpc: new JsonRpc(Node_url),
  signatureProvider: new JsSignatureProvider([Private_key])
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.post('/', async (req, res) => {
  const action = req.body.action;
  const dataId = parseInt(req.body.dataId);
  const data = req.body.data;
  if (['create', 'read', 'update', 'destroy'].includes(action) && !isNaN(dataId)) {
    try {
      const result = await api.transact({
        actions: [
          {
            account,
            name: action,
            authorization: [{ actor: account, permission: 'active' }],
            data: { id: dataId, user: account, data },
          },
        ],
      });
      console.log(result);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  } else {
    res.status(400).json({ message: 'Invalid request' });
  }
});

(async () => {
  const ip = await axios.get('https://api.ipify.org')
  const port = PORT || 3000
  app.listen(port, () => {
    console.log(`Server running on http://${ip.data}:${port}`)
  });
})();
