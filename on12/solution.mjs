import { Api, JsonRpc, JsSignatureProvider } from 'ineryjs/dist/index.js'
import * as dotenv from 'dotenv'
dotenv.config()

const private_key = process.env.PRIVATE_KEY
const account = process.env.INERY_ACCOUNT
const actor = account

const rpc = new JsonRpc(process.env.URL) 
const signature  = new JsSignatureProvider([private_key]); 

const api = new Api({rpc:rpc, signatureProvider:signature})

const id = process.argv[2]
const data = process.argv[3]

async function createTransaction(id, account, data){
    try {
        const transaction = await api.transact({
            actions:[{
                account,
                name: "create",
                authorization: [
                    {actor, permission:"active"}
                ],
                data: {id, account, data}
            }
            ]
        },
        {broadcast:true, sign:true})
    
        console.log("CREATE transaction: ", transaction)
        console.log("RESPONSE: ", transaction.processed.action_traces[0].console)
    } catch(e){
        console.log("Error: ", e)
    }
}

async function readTransaction(id){
    try {
        const transaction = await api.transact({
            actions: [{
                account, 
                name: "read",
                authorization: [{
                    actor, permission:"active"
                }],
                data: {id}
            }
            ]
        }, {broadcast:true, sign:true})
        console.log("READ transaction: ", transaction)
        console.log("RESPONSE: ", transaction.processed.action_traces[0].console)
    } catch(e){
        console.log("Error: ", e)
    }

}

async function main(id, account, data){
    await createTransaction(id, account, data)
    await readTransaction(id)
}

main(id, account, data)