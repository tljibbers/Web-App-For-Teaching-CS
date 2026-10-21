import dotenv from 'dotenv'
import { MongoClient } from 'mongodb';

dotenv.config({path: './config.env', debug: true});

const dataBase = process.env.ATLAS_URI
const client = new MongoClient(dataBase)

export async function databaseConnect() {
    
    try {
        await client.connect()
        console.log('opened')
        return client
    } catch (e) {
        console.error(e)
    }
   

}

export async function disconnect() {
    await client.close()
    console.log('closed')
}

databaseConnect()
disconnect()
