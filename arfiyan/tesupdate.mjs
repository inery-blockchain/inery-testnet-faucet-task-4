import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'ineryjs/dist/index.js'

const url = "http://vmi1076416.contaboserver.net:8888"
const json_rpc = new JsonRpc(url) 
const private_key = "5K551AXU2ezdhZSzTKcRtN6HHsz2fUp5LomE6hVuaxYLfEcW7rc"; 
const actor = "alternativ"
const account = "arfiyan"
const signature  = new JsSignatureProvider([private_key]); 
const api = new Api({ rpc: json_rpc, signatureProvider: signature })

async function update(id, data){
    try{
        const tx = await api.transact({
            actions:[
                {
                    account,
                    name:"update",
                    authorization:[
                        {
                            actor,
                            permission:"active"
                        }
                    ],
                    data:{
                        id,
                        data,
                    }
                }
            ]
        },{broadcast:true,sign:true})

        console.log("=========================== UPDATE TRANSACTION ========================")
        
        console.log(tx, "\n")
        console.log("Response from contract :", tx.processed.action_traces[0].console)
        console.log("\n")
    }catch(error){
        console.log(error)
    }
}

async function main(id, user, data){
    await update(id, data)
    
}

// call RPC that we created in create function
main(1, account, "CRUD TRANSACTION by Arfiyan")