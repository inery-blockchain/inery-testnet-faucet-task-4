import { Api, JsonRpc, JsSignatureProvider } from "ineryjs";
import dotenv from "dotenv";
dotenv.config();

const url = "http://66.175.235.199:8888"; // your IP address

const json_rpc = new JsonRpc(url);
const private_key = process.env.PRIVATE_KEY; // import private key from .env file;

const account = "angga"; // your inery account name
const actor = "angga";
const signature = new JsSignatureProvider([private_key]);

const api = new Api({
  rpc: json_rpc,
  signatureProvider: signature,
});

const CreateTransaction = async (id, user, data) => {
  const Hashdata = { id, user, data };
  try {
    const tx = await api.transact(
      {
        actions: [
          {
            account,
            name: "create",
            authorization: [
              {
                actor,
                permission: "active",
              },
            ],
            data: {
              ...Hashdata,
            },
          },
        ],
      },
      { broadcast: true, sign: true }
    );

    console.log(tx, "\n");
    console.log("\nResponse data:", tx.processed.action_traces[0].console);
  } catch (err) {
    console.log(err);
  }
};

const DestroyTrancsaction = async (id) => {
  try {
    const destroyTx = await api.transact(
      {
        actions: [
          {
            account,
            name: "destroy",
            authorization: [
              {
                actor,
                permission: "active",
              },
            ],
            data: {
              id,
            },
          },
        ],
      },
      { broadcast: true, sign: true }
    );

    console.log("Record destroyed by angga\n\n");
    console.log(destroyTx, "\n");
    console.log("responses: \n", destroyTx.processed.action_traces[0].console);
  } catch (err) {
    console.log(err);
  }
};

const PushTransaction = async (DataId, user, data) => {
  await CreateTransaction(DataId, user, data);
  await DestroyTrancsaction(DataId);
};

PushTransaction(1020, account, "push transaction by angga");
