import dotenv from 'dotenv'
import { MongoClient } from 'mongodb';

dotenv.config({path: './config.env', debug: true});

const dataBase = process.env.ATLAS_URI
const client = new MongoClient(dataBase)
const dbName = 'accountsList'

export async function databaseConnect() {
    
    try {
        await client.connect()
        const dbHolder = client.db(dbName)
        return dbHolder
    } catch (e) {
        console.error(e)
        process.exit(1);
    }
   

}

export async function disconnect() {
    await client.close()
    console.log('closed')
}

