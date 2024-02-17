from pymongo import MongoClient
import os

def connectDB():
    try:
        #client = MongoClient("mongodb://user:user@backtesting-shard-00-00.uixwv.mongodb.net:27017,backtesting-shard-00-01.uixwv.mongodb.net:27017,backtesting-shard-00-02.uixwv.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-asok7r-shard-0&authSource=admin&retryWrites=true&w=majority")
        MONGO_URL = os.environ.get('MONGO_URL')
        client = MongoClient(MONGO_URL)
        db = client['backtesting']
        #backtesting = db['backtesting']
        print("CONNECTION ESTABLISHED (backtest)")
        return db
    except Exception as e:
        print('error while connecting to database:')
        print(e)