import type { RequestHandler } from '../$types';
import { json } from '@sveltejs/kit';
import { Proccess, account, actor } from '$lib/setup/setup';

const name = 'update';
const permission = 'active';

export const POST: RequestHandler = async ({ request }) => {
const { id, data } = await request.json();
try {const Mhash = await Proccess.transact({actions:[{account, name,authorization:[{actor, permission,}],data:{ id, data}}]},
{broadcast:true,sign:true});return json(Mhash);} catch (error) {return json(error);}};